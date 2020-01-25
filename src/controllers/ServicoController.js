//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const Servico = require("../models/Servico");

module.exports = {
  async faturamento(req, res) {
    //retornar a o valorTotal dos servicos por dia, semana, e mes.
    const { _idCliente } = req.body;
    let servico = await Servico.find({ cliente: _idCliente });
    return res.json(servico);
  },
  //Listar
  async index(req, res) {
    const { _idCliente } = req.body;
    let servico = await Servico.find({ cliente: _idCliente });
    return res.json(servico);
  },
  //Buscar
  async show(req, res) {
    const { _id } = req.body;

    let servico = await Servico.findOne({
      _id
    });

    return res.json(servico);
  },
  //Criar
  async store(req, res) {
    const {
      nome,
      valor,
      data,
      qtdTotalServico,
      valorTotalServico,
      cliente
    } = req.body;

    let servico = await Servico.create({
      nome,
      valor,
      data,
      qtdTotalServico,
      valorTotalServico,
      cliente
    });

    return res.json(servico);
  },
  //Atualizar
  async update(req, res) {
    const {
      _id,
      nome,
      valor,
      data,
      qtdTotalServico,
      valorTotalServico,
      cliente
    } = req.body;

    if (_id) {
      const filtro = { _id };
      const atualizacao = {
        nome,
        valor,
        data,
        qtdTotalServico,
        valorTotalServico
      };
      let servico = await Servico.findOneAndUpdate(filtro, atualizacao);
    } else {
      let servico = await Servico.create({
        nome: nome,
        valor: valor,
        data: data,
        qtdTotalServico: qtdTotalServico,
        valorTotalServico: valorTotalServico,
        cliente: cliente
      });
    }

    servico = await Servico.findOne({
      _id
    });

    res.json(servico);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let servico = await Servico.findByIdAndDelete({
      _id
    });

    return res.json(servico);
  }
};
