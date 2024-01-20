import React from "react";
import QuestionsAndAns from "./QuestionsAndAns";

function FAQ() {
  return (
    <div className="container mx-auto flex my-20">
      <div className="w-[80%] mx-auto flex gap-10 justify-between">
        <div className=" flex  flex-1 gap-10">
          <div className="flex flex-col">
            <p className="text-highlitecolor text-2xl">FAQ</p>
            <h1 className="text-3xl font-bold text-darkblue">
              Frequently Asked
            </h1>
            <h1 className="text-3xl font-bold text-highlitecolor">Questions</h1>
            <p className="text-sm text-darkblue py-2">
              If you have any other questions, you can contact me by email
            </p>
            <p className="text-highlitecolor text-sm">yourmail@gamil.com</p>
          </div>
        </div>

        <div className="flex  gap-2 flex-col flex-1 ">
          <QuestionsAndAns
            details="Community files are design files creators have shared with the
          Community. Create templates for wireframe, UI kits, asset libraries,
          and design systems. Or share educational resources, interactive
          tutorials, and tools to use across the design process. Community files
          are design files creators have shared with the Community. Create
          templates for wireframe, UI kits, asset libraries, and design systems.
          Or share educational resources, interactive tutorials, and tools to
          use across the design process. tutorials, and tools to use across the
          design process. Community files are design files creators have shared
          with the Community. Create templates for wireframe, UI kits, asset
          libraries, and design systems."
          />
          <QuestionsAndAns
            details="Community files are design files creators have shared with the
          Community. Create templates for wireframe, UI kits, asset libraries,
          and design systems. Or share educational resources, interactive
          tutorials, and tools to use across the design process. Community files
          are design files creators have shared with the Community. Create
          templates for wireframe, UI kits, asset libraries, and design systems.
          Or share educational resources, interactive tutorials, and tools to
          use across the design process. tutorials, and tools to use across the
          design process. Community files are design files creators have shared
          with the Community. Create templates for wireframe, UI kits, asset
          libraries, and design systems."
          />
          <QuestionsAndAns
            details="Community files are design files creators have shared with the
          Community. Create templates for wireframe, UI kits, asset libraries,
          and design systems. Or share educational resources, interactive
          tutorials, and tools to use across the design process. Community files
          are design files creators have shared with the Community. Create
          templates for wireframe, UI kits, asset libraries, and design systems.
          Or share educational resources, interactive tutorials, and tools to
          use across the design process. tutorials, and tools to use across the
          design process. Community files are design files creators have shared
          with the Community. Create templates for wireframe, UI kits, asset
          libraries, and design systems."
          />
          <QuestionsAndAns
            details="Community files are design files creators have shared with the
          Community. Create templates for wireframe, UI kits, asset libraries,
          and design systems. Or share educational resources, interactive
          tutorials, and tools to use across the design process. Community files
          are design files creators have shared with the Community. Create
          templates for wireframe, UI kits, asset libraries, and design systems.
          Or share educational resources, interactive tutorials, and tools to
          use across the design process. tutorials, and tools to use across the
          design process. Community files are design files creators have shared
          with the Community. Create templates for wireframe, UI kits, asset
          libraries, and design systems."
          />
          <QuestionsAndAns
            details="Community files are design files creators have shared with the
          Community. Create templates for wireframe, UI kits, asset libraries,
          and design systems. Or share educational resources, interactive
          tutorials, and tools to use across the design process. Community files
          are design files creators have shared with the Community. Create
          templates for wireframe, UI kits, asset libraries, and design systems.
          Or share educational resources, interactive tutorials, and tools to
          use across the design process. tutorials, and tools to use across the
          design process. Community files are design files creators have shared
          with the Community. Create templates for wireframe, UI kits, asset
          libraries, and design systems."
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
