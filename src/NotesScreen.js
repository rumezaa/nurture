import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageBg from "./images/MessageBg.svg";
import ArrowIcon from "./images/Arrow_icon.svg";
import Xicon from "./images/x_icon.svg"

function NotesScreen() {
  const nav = useNavigate();
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleNewEntryChange = (e) => {
    setNewEntry(e.target.value);
  };

  const handleAddEntry = () => {
    if (newEntry.trim() !== "") {
      const newEntryWithDate = {
        date: new Date().toLocaleDateString(),
        content: newEntry,
      };
      setEntries([...entries, newEntryWithDate]);
      setNewEntry("");
    }
  };

  const openModal = (entry) => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  return (
    <div
      style={{ backgroundImage: `url(${MessageBg})` }}
      className="w-screen h-screen bg-no-repeat bg-cover flex flex-col"
    >
      <div className="bg-white border-b-2 border-light-gray h-16 flex items-center gap-2 px-4">
        <div
          onClick={() => nav("/notes")}
          style={{ backgroundImage: `url(${ArrowIcon})` }}
          className="w-8 h-8 bg-no-repeat bg-cover cursor-pointer"
        />
        <h3>Your Notes</h3>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <div className="mb-4 flex flex-col items-center justify-center gap-y-2">
          <textarea
            value={newEntry}
            onChange={handleNewEntryChange}
            placeholder="Write your journal entry here..."
            className="w-full max-w-md h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            onClick={handleAddEntry}
            className="bg-accent-purple rounded-full w-1/2 max-w-xs p-2 text-center text-white cursor-pointer"
          >
            Submit
          </div>
        </div>

        <div className="overflow-y-auto h-2/3">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md mb-4 cursor-pointer"
              onClick={() => openModal(entry)}
            >
              <p>{entry.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying full entry */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md mx-4">
          <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Journal Entry</h2>
          <div
            onClick={closeModal}
            style={{ backgroundImage: `url(${Xicon})` }}
            className="w-8 h-8 bg-no-repeat bg-cover"
          />
        </div>
            
            <p className="mb-4">{selectedEntry.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesScreen;
