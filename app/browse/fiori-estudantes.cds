using sap.cap.escola as my from '../../db/Estudantes';


annotate my.Estudantes with @UI : { //Modificando as anotaçoes padroes da entidade
    SelectionFields : [
        primeiro_nome, 
        email

    ], //nao dicionar manualmente os campos de filtragem.
    //Ctrl + espaço, para mostrar as entdidades

    LineItem : [ //Filtrando e organizando
        {
            $Type : 'UI.DataField',
            Value : email,
            Label : 'Email'
        },

        {
            $Type : 'UI.DataField',
            Value : primeiro_nome,
            Label : 'Primeiro Nome'
        }
    ],
HeaderInfo : { // customizando o cabeçalho da visualização detalhada
    $Type  : 'UI.HeaderInfoType',
    TypeName : 'Estudante',
    TypeNamePlural : 'Estudantes',
    Title : { Value : primeiro_nome }, 
    Description : { Value : email }
},
    
}; 