import React , {useEffect, useState} from "react";

function App(){
  const[alunos, setAlunos] = useState([
    "Guilherme Araujo",
    "João Vitor",
    "Gustavo Cervera",
    "Matheus Rodrigues",
  ]);

  const[turma] = useState("Lista de Alunos da Turma C002-M03-FLS T2");

  const[input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("alunos", JSON.stringify(alunos));
  },[alunos]);

  useEffect(() => {
    const alunosStorage = localStorage.getItem("alunos");
    if(alunosStorage){
      setAlunos(JSON.parse(alunosStorage));
    }
  },[]);

  function handleAdd(){
    setAlunos([...alunos,input]);
    setInput("");
  }

  return(
    <>
    <div className="container">
      <h1 className = "titulo">{turma}</h1>
    </div>
    <div className="container">
      <ul>
        {alunos.map((aluno) => (
          <li key = {aluno}>{aluno}</li>
          ))
        }
      </ul>
    </div>
    <div className="container">
      <input placeholder="Nome do Aluno" type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="button" onClick = {handleAdd}> Adicionar </button>
    </div>
    </>
  );
}

export default App;