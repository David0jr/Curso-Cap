namespace sap.cap.escola; //O namespace define um espaço de nomes único para evitar conflitos


entity Estudantes{ //entity define um modelo de dados, ou seja, representa uma tabela ou estrutura de dados no modelo
    key email: String(20); //usada para identificar de forma única cada registro.
    primeiro_nome: String(20);
    ultimo_nome: String(20);
    data_cadastro : Date;
}