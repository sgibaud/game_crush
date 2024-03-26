import React from "react";
import { useEffect, useState } from "react";
import * as MailComposer from "expo-mail-composer";

// CSS
import { styles } from "../../../css/style";

export default function Mail() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  const sendMail = async () => {
    const { uri } = await Print.printToFileAsync({
      html: "<h1>My pdf!</h1>",
    });

    MailComposer.composeAsync({
      subject: subject,
      body: body,
      recipients: recipients,
      attachments: [uri],
    });
  };

  const addRecipient = () => {
    let newRecipients = [...recipients];
    newRecipients.push(email);

    setRecipients(newRecipients);
    setEmail(undefined);
  };

  const showRecipients = () => {
    if (recipients.length === 0) {
      return <Text>No recipients added</Text>;
    }

    return recipients.map((recipient, index) => {
      return <Text key={index}>{recipient}</Text>;
    });
  };

  return (
    <View style={styles.mail}>
      <TextInput
        value={subject}
        onChangeText={setSubject}
        placeholder="Subject"
      />
      <TextInput value={body} onChangeText={setBody} placeholder="Body" />
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <Button title="Add Recipient" onPress={addRecipient} />
      {showRecipients()}
      {isAvailable ? (
        <Button title="Send Mail" onPress={sendMail} />
      ) : (
        <Text>Email not available</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}