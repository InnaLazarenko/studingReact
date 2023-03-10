import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";

import classes from "./NewPost.module.css";

function NewPost() {
  /* const [body, setBody] = useState("");
  const [name, setName] = useState("");

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setName(event.target.value);
  }; */

  return (
    <Modal>
      <Form method="post" className={classes.form} /* onSubmit={submitHandler} */>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}

            name="text" //for From react router component
/*             value={body}
 */      /*       onChange={bodyChangeHandler} */
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required

            name="author" //for From react router component
/*             value={name}
 */           /*  onChange={authorChangeHandler} */
          />
        </p>
        <p className={classes.actions}>
          <Link to="..">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export const action = async({request}) => {
  const formData = await request.formData(); //access to our Form
  const postData = Object.fromEntries(formData); //{autor: ..., text: ...}

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect('/');
}
