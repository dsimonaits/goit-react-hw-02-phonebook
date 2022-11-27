import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { Btn } from './ContactList.styled';
import { Number } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <p>
            {name}: <Number>{number}</Number>
          </p>
          <Btn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Btn>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
