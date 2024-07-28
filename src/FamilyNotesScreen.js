import { useState } from "react";
import ArrowIcon from "./images/Arrow_icon.svg";
import Xicon from "./images/x_icon.svg";
import { useNavigate } from "react-router-dom";
import { MODAL } from "./data_set/modal_data";

function FamilyNotesScreen() {
  const dates = [
    { date: "July 1, 2023", session: 1 },
    { date: "July 7, 2023", session: 2 },
    { date: "July 14, 2023", session: 3 },
    { date: "July 21, 2023", session: 4 },
    { date: "July 28, 2023", session: 5 },
    { date: "August 3, 2023", session: 6 },
  ];

  const [modal, toggleModal] = useState(false);

  const nav = useNavigate();

  const NotesItem = ({ item }) => (
    <div
      className="bg-white border-b-2 border-light-gray h-24 flex  items-center gap-2 px-6"
      onClick={() => toggleModal(true)}
    >
      <div className="flex flex-col">
        <h3>{item.date}</h3>
        <h3 className="text-sm text-gray leading-3">Session {item.session}</h3>
      </div>
    </div>
  );

  const Modal = ({ modal }) => (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 h-3/4 w-5/6 rounded-lg shadow-lg flex flex-col justify-start gap-y-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3>{modal.date}</h3>
            <h3 className="text-sm text-gray leading-3">{modal.session}</h3>
          </div>
          <div
            onClick={() => toggleModal(false)}
            style={{ backgroundImage: `url(${Xicon})` }}
            className="w-8 h-8 bg-no-repeat bg-cover"
          />
        </div>

        <div className="w-full h-5/6 overflow-y-auto">
          <section className="mb-6">
            <h2 className="font-semibold mb-2">Therapist:</h2>
            <p className="">{modal.therapist}</p>
          </section>

          <section className="mb-6">
            <h2 className="text font-semibold mb-2">Participants:</h2>
            <p className="text-sm mb-1">
              <strong>Parent(s):</strong> {modal.participants.parents.join(", ")}
            </p>
            <p className="text-sm">
              <strong>Adolescent:</strong> {modal.participants.adolescent.name} (
              {modal.participants.adolescent.age} years old)
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text font-semibold mb-2">Session Summary:</h2>
            {modal.sessionSummary.map((section, index) => (
              <div className="mb-4" key={index}>
                <h3 className="text font-semibold mb-1">{section.title}</h3>
                {section.content.map((content, idx) =>
                  typeof content === "string" ? (
                    <p className="text-sm font-light mb-1" key={idx}>
                      {content}
                    </p>
                  ) : (
                    <p className="text-sm mb-1" key={idx}>
                      <strong>{content.speaker}:</strong> {content.statement}
                    </p>
                  )
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col content-start">
      <div className="bg-white border-b-2 border-light-gray h-16 flex items-center gap-2 px-4">
        <div
          onClick={() => nav("/notes")}
          style={{ backgroundImage: `url(${ArrowIcon})` }}
          className="w-8 h-8 bg-no-repeat bg-cover"
        />
        <h3>Family Notes</h3>
      </div>
      <div className="h-3/4 w-screen flex flex-col mb-7">
        {dates.map((item, index) => (
          <NotesItem key={index} item={item} />
        ))}
      </div>
      {modal && <Modal modal={MODAL} />}
    </div>
  );
}

export default FamilyNotesScreen;
