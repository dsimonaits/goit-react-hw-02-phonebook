import PropTypes from 'prop-types';
import { ListItem } from './Contact.styled';
import { Btn } from './Contact.styled';
import { Number } from './Contact.styled';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <ListItem key={id}>
    <p>
      {name}: <Number>{number}</Number>
    </p>
    <Btn type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Btn>
  </ListItem>
);

export default Contact;

Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
