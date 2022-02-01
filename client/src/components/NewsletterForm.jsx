import { useState } from "react";
import { sanitize } from "../../src/utils/miscellaneous";
import Loading from "../components/Loading";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div
      style={{
        height: "30vh",
        backgroundColor: "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3
        className="mb-1 uppercase font-bold"
        style={{ fontSize: "30px", marginBottom: "30px" }}
      >
        Subscribe to Mockup Newsletter
      </h3>
      <h3
        className="mb-1 uppercase font-light"
        style={{ fontSize: "20px", marginBottom: "30px", fontWeight: "200" }}
      >
        Be the first to have access to latest designs & discounts!
      </h3>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div className="mc-field-group" style={{ width: "85%" }}>
          <input
            style={{ padding: 10, width: "100%" }}
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Your email"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button style={{ padding: 10 }} onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="min-h-42px" style={{ marginTop: "20px" }}>
        {"sending" === status ? (
          <Loading
            showSpinner
            message="Sending..."
            contentColorClass="text-white"
            hasVisibilityToggle={false}
          />
        ) : null}
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-200 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
