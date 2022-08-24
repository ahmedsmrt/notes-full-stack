import { motion } from "framer-motion";

const EmotionDefinition = ({ definitions, authors, quotes }) => {
  return (
    <div className="emotion-def">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        <strong>Definition:</strong> {definitions}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
         <strong>Quote: </strong>{quotes}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="author"
      >
        -{authors}
      </motion.p>
    </div>
  );
};

export default EmotionDefinition;
