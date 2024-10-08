import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, detachBot, deleteBot}) {

  const myArmy = bots.map((bot)=>{
    return(
      <BotCard key={bot.id}
         bot={bot}
         clickEvent={detachBot}
         deleteBot={deleteBot} 
      />
    )
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myArmy}
          My Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;