import type { Person } from '../../@types/person';

type PersonTableProps = {
  people: Person[];
};

const PersonTable = ({ people }: PersonTableProps) => {
  console.log(people);

  return (
    <table>
      <PersonTableHead />
      <tbody>
        {people.map(element => (
          <PersonTableRow
            key={element.id}
            {...element}
          />
        ))}
      </tbody>
    </table>
  );
};

const PersonTableHead = () => (
  <thead>
    <tr>
      <th>Nom complet</th>
      <th>Role</th>
      <th>Actif</th>
    </tr>
  </thead>
);

// Le type des props de "PersonTableRow" est un type dérivé du type "Person"
type PersonTableRowProps = Person & {};

const PersonTableRow = ({ firstname, lastname, role, isActif }: PersonTableRowProps) => {

  return (
    <tr>
      <td>{firstname} {lastname}</td>
      <td>{role}</td>
      <td>{isActif ? '🟢' : '🔴'}</td>
    </tr>
  );
};

export default PersonTable;