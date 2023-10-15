import React, { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [editedData, setEditedData] = useState({
    death: 0,
    treating: 0,
    case: 0,
    recover: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST"
        );
        const data = response.data.detail || [];
        setDataCovid(data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const updateData = (name) => {
    setEditingData(name);
    const itemToEdit = dataCovid.find((item) => item.name === name);
    if (itemToEdit) {
      setEditedData({
        death: itemToEdit.death,
        treating: itemToEdit.treating,
        case: itemToEdit.case,
        recover: itemToEdit.recover,
      });
    }
  };

  const cancelEdit = () => {
    setEditingData(null);
  };

  const saveEdit = (name) => {
    // Không gửi yêu cầu đến API vì bạn không sở hữu API.
    // Chỉ cập nhật dữ liệu trên giao diện người dùng.
    const updatedDataCovid = dataCovid.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          death: editedData.death,
          treating: editedData.treating,
          case: editedData.case,
          recover: editedData.recover,
        };
      }
      return item;
    });

    setDataCovid(updatedDataCovid);
    setEditingData(null);
  };

  const deleteData = (name) => {
    const updatedDataCovid = dataCovid.filter((item) => item.name !== name);
    setDataCovid(updatedDataCovid);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Death</th>
            <th>Treating</th>
            <th>New case</th>
            <th>Recover</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                {editingData === item.name ? (
                  <input
                    type="text"
                    value={editedData.death}
                    onChange={(e) =>
                      setEditedData({ ...editedData, death: e.target.value })
                    }
                  />
                ) : (
                  item.death
                )}
              </td>
              <td>
                {editingData === item.name ? (
                  <input
                    type="text"
                    value={editedData.treating}
                    onChange={(e) =>
                      setEditedData({ ...editedData, treating: e.target.value })
                    }
                  />
                ) : (
                  item.treating
                )}
              </td>
              <td>
                {editingData === item.name ? (
                  <input
                    type="text"
                    value={editedData.case}
                    onChange={(e) =>
                      setEditedData({ ...editedData, case: e.target.value })
                    }
                  />
                ) : (
                  item.case
                )}
              </td>
              <td>
                {editingData === item.name ? (
                  <input
                    type="text"
                    value={editedData.recover}
                    onChange={(e) =>
                      setEditedData({ ...editedData, recover: e.target.value })
                    }
                  />
                ) : (
                  item.recover
                )}
              </td>
              <td>
                {editingData === item.name ? (
                  <>
                    <button onClick={cancelEdit}>Cancel</button>
                    <button onClick={() => saveEdit(item.name)}>Save</button>
                  </>
                ) : (
                  <button onClick={() => updateData(item.name)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteData(item.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
