import { Btn } from 'components/App/App.styled';

export const ContactList = ({ contacts, onDeleteContacts }) =>
  contacts.length ? (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => onDeleteContacts(id)}>
            Delete
          </Btn>
        </li>
      ))}
    </ol>
  ) : (
    <p>Contact not found!</p>
  );
