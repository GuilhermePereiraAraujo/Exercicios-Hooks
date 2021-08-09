import React , {useEffect, useState, useMemo, useCallback} from "react";

function App(){
  const[alunos, setAlunos] = useState([
    "Guilherme Araujo",
    "João Vitor",
    "Gustavo Cervera",
    "Matheus Rodrigues",
  ]);

  const[turma] = useState("Lista de Alunos da Turma C002-M03-FLS T2");

  const totalDeAlunos = useMemo(() => {
    return alunos.length;
  }, [alunos.length])

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

  const handleAdd = useCallback(() => {
    setAlunos([...alunos,input]);
    setInput("");
  },[input,alunos])

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
    <div>
      <h2 className="container" >Total de Alunos: {totalDeAlunos}</h2>
    </div>
    </>
  );
}

export default App;