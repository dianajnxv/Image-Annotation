import React, { useState } from "react";
import Axios from "axios";

const Annotation = () => {
  const [image, setImage] = useState('');
  const [tag, setTag] = useState("");

  const createAnnotation = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("tag", tag);

      await Axios.post("http://localhost:5173/annotation", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log('Annotation has been created');
      setImage('');
      setTag('');
    } catch (error) {
      console.error('Error creating annotation:', error);
    }
  };

  return (
    <form onSubmit={createAnnotation}>
      <div>
        {image && <img src={URL.createObjectURL(image)} alt="Image" />}
        <input type="file" accept="image/*" onChange={(event) => setImage(event.target.files[0])} />
      </div>
      <input type="text" placeholder="Tag" value={tag} onChange={(event) => setTag(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Annotation;
