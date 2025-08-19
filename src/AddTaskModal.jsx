import { useState } from "react";

const openModaltn = {
  padding: "8px 16px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const wrapper = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modal = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
};

const addBtn = {
  padding: "8px 16px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const cancel = {
  padding: "8px 16px",
  background: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const input = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
  background: "none",
  color: "#1a1a1a"
};

const textarea = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
  minHeight: "80px",
  background: "none",
  color: "#1a1a1a"
};

const label = { display: "block", marginBottom: "4px", color: "#213547" }

export const AddTaskModal = ({ toAddCard }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toAddCard({ title, description });
    setTitle("");
    setDescription("");
    setIsOpenModal(false);
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setIsOpenModal(false);
  };

  return (
    <>
      <button onClick={() => setIsOpenModal(true)} style={openModaltn}>
        Add task
      </button>

      {isOpenModal && (
        <div style={wrapper} onClick={handleClose}>
          <div style={modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, color: "#213547" }}>Add New Task</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label style={label}>
                  Title:
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  style={input}
                />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label style={label}>
                  Description:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={textarea}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <button type="button" onClick={handleClose} style={cancel}>
                  Cancel
                </button>
                <button type="submit" style={addBtn}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
