import React, { useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#f0f4f8',
    padding: '25px',
    borderRadius: '10px',
    maxWidth: '450px',
    margin: '40px auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#1d3557',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '25px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  buttonAdd: {
    backgroundColor: '#a8dadc',
    border: 'none',
    padding: '12px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#1d3557',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  buttonAddHover: {
    backgroundColor: '#89c9ca',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#ffffff',
    padding: '12px 15px',
    borderRadius: '6px',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  buttonRemove: {
    backgroundColor: '#ff6b6b',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#fff',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  buttonRemoveHover: {
    backgroundColor: '#e55a5a',
  },
  noStudents: {
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  }
};

function Composant() {
  const [students, setStudents] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  // Ajouter un étudiant dans la liste
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (nom.trim() === '' || prenom.trim() === '') {
      alert('Veuillez remplir les deux champs.');
      return;
    }
    const newStudent = {
      id: Date.now(),
      nom: nom.trim(),
      prenom: prenom.trim(),
    };
    setStudents([...students, newStudent]);
    setNom('');
    setPrenom('');
  };

  // Supprimer un étudiant par id
  const handleRemoveStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ajouter un étudiant</h2>
      <form style={styles.form} onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.buttonAdd}>Ajouter</button>
      </form>

      {students.length === 0 ? (
        <p style={styles.noStudents}>Aucun étudiant ajouté.</p>
      ) : (
        <ul style={styles.list}>
          {students.map(student => (
            <li key={student.id} style={styles.listItem}>
              <span>{student.nom} {student.prenom}</span>
              <button
                onClick={() => handleRemoveStudent(student.id)}
                style={styles.buttonRemove}
                aria-label={`Supprimer ${student.nom} ${student.prenom}`}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Composant;
