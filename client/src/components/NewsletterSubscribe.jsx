import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL =
    "https://gmail.us14.list-manage.com/subscribe/post?u=5eaa06abeadaf69557c7f2f82&amp;id=26664882ea";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
