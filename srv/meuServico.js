//Select = comando para realizar a busca de dados no banco.
//Where = usado para filtrar os resultados por um campo específico.
//Limit = usado para limitar o numero de resultados exibidos.
//Transaction =  inicia uma transação no banco de dados, garantindo que as operações executadas dentro dela sejam seguras.
//Run = xecuta a consulta ou atualização de dados dentro da transação.
//Try/Catch = samos try/catch para capturar e tratar erros que possam ocorrer durante a execução da transação.

const cds = require('@sap/cds')


module.exports = (srv) => {
    srv.on("READ", 'GetEstudantes', req => {
        try{
            let filtro = req.data
            const {Estudantes} = cds.entities('sap.cap.escola')
            let dados = SELECT.from(Estudantes).where(filtro)
            
            return dados
        }catch(err){
            console.error("Erro ao ler os dados de Estudantes" + err)
            throw err
        }
    })

module.exports = cds.service.impl(async (srv) => {
    const { Aeronaves, Voos, Manutencoes } = srv.entities;

    // Valida se as tabelas têm dados após o deploy
    srv.before('READ', '*', async () => {
        const aeronaves = await cds.run(SELECT.from(Aeronaves));
        if (!aeronaves.length) throw new Error('Nenhuma aeronave disponível!');
    });
});

    srv.after("READ", "Estudantes", data => {
        return data.map(d => { console.log(d) });
       });
    
    srv.on("CREATE", "UpdateEstudantes", async (req, ses) =>{
        let primeiroNome = req.data.primeiro_nome
        let estudanteEmail =req.data.estudanteEmail

        let result = await cds
        .transaction()
        .run(
            UPDATE (Estudantes)
            .set({primeiro_nome: primeiroNome})
            .where({estudanteEmail: estudanteEmail})

        ) .then((resolve, reject) => {
            if(typeof resolve !== 'undefined' && resolve >= 1){
                return req.data
            }else{
                console.log("Registro não encontrado!")
            }
        }).catch((err) => {
            console.log("Erro ao atualizar")
            return None
        })
        console.log(result)
        return result
    })
 }
