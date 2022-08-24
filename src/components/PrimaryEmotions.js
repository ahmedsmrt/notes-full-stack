import React, { useState } from "react";
import { emotionCollection } from "./data";
import { motion } from "framer-motion";
import EmotionDefinition from "./EmotionDefinition";

const PrimaryEmotions = () => {
  const emotions = emotionCollection;
  const happy = emotions[4];
  const sad = emotions[3];
  const anger = emotions[1];
  const fear = emotions[0];
  const disgust = emotions[2];
  const surprise = emotions[5];
  const emotionalArr = [happy, sad, anger, fear, disgust, surprise];

  const [secondaryEmotion, setSecondaryEmotion] = useState([]);
  const [tertiaryEmotion, setTertiaryEmotion] = useState([]);

  const [definition, setDefinition] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  console.log(secondaryEmotion);

  const getSecondaryEmotion = (array) => {
    let tempArr = array;
    console.log(tempArr[1]);
    return tempArr[1];
  };

  const getTertiaryEmotion = (array) => {
    let tempArr = array;
    return tempArr[2];
  };

  const handleSecondaryEmotion = (e) => {
    let emotion = e.target.innerHTML;
    for(let secondary of secondaryEmotion) {
      if(emotion == secondary.word) {
        setDefinition(secondary.definition)
        setQuote(secondary.quote)
        setAuthor(secondary.author)
      }
    }
  };

  const handleTertiaryEmotion = (e) => {
    let emotion = e.target.innerHTML;
    for(let tertiary of tertiaryEmotion) {
      if(emotion == tertiary.word) {
        console.log(tertiary)
        setDefinition(tertiary.definition)
        setQuote(tertiary.quote)
        setAuthor(tertiary.author)
      }
    }
  };

  const handleClick = (e) => {
    // setPrimaryEmotion(e.target.id)

    let emotionName = e.target.id;

    for (let emotion of emotionalArr) {
      if (emotionName === emotion[0]) {
        let secondary = getSecondaryEmotion(emotion);
        let tertiary = getTertiaryEmotion(emotion);
        setSecondaryEmotion(secondary);
        setTertiaryEmotion(tertiary);
      }
    }
  };

  return (
    <div className="emotion-wrap">
      <EmotionDefinition
        definitions={definition}
        quotes={quote}
        authors={author}
      />
      <h3>Primary Emotions</h3>
      <aside>
        <div className="primary-emotions">
          <div className="happy">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/EmotionForm/d8ab994e59925fcd909c4ae2d752026463303bc4/images/Happy.svg"
              alt="Happy"
              id="happy"
              onClick={handleClick}
            />
            <label value="happy" htmlFor="happy">
              Happy
            </label>
          </div>
          <div className="sad">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/EmotionForm/d8ab994e59925fcd909c4ae2d752026463303bc4/images/Sad.svg"
              alt="Sad"
              id="sad"
              onClick={handleClick}
            />
            <label htmlFor="sad">Sad</label>
          </div>
          <div className="anger">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/EmotionForm/d8ab994e59925fcd909c4ae2d752026463303bc4/images/anger.svg"
              alt="Anger"
              id="anger"
              onClick={handleClick}
            />
            <label htmlFor="anger">Anger</label>
          </div>
          <div className="fear">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/EmotionForm/d8ab994e59925fcd909c4ae2d752026463303bc4/images/Fear.svg"
              alt="Fear"
              id="fear"
              onClick={handleClick}
            />
            <label htmlFor="fear">Fear</label>
          </div>
          <div className="surprise">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/EmotionForm/d8ab994e59925fcd909c4ae2d752026463303bc4/images/Surprise.svg"
              alt="Surprise"
              id="surprise"
              onClick={handleClick}
            />
            <label htmlFor="surprise">Surprise</label>
          </div>
          <div className="disgust">
            <img
              src="https://raw.githubusercontent.com/ahmedsmrt/EmotionForm/d8ab994e59925fcd909c4ae2d752026463303bc4/images/Disgust.svg"
              alt="Disgust"
              id="disgust"
              onClick={handleClick}
            />
            <label htmlFor="disgust">Disgust</label>
          </div>
        </div>
        <div className="secondary-emotion-wrap">
          <h4>Secondary Emotions</h4>
          <div className="secondary-emotions">
            {secondaryEmotion.map((emote) => {
              return (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  key={emote.word}
                  onClick={handleSecondaryEmotion}
                >
                  {emote.word}
                </motion.p>
              );
            })}
          </div>
        </div>
        <div className="tertiary-emotion-wrap">
          <h4>Tertiary Emotions</h4>
          <div className="tertiary-emotions">
            {tertiaryEmotion.map((emote) => {
              return (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.55 }}
                  key={emote.word}
                  onClick={handleTertiaryEmotion}
                >
                  {emote.word}
                </motion.p>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PrimaryEmotions;
