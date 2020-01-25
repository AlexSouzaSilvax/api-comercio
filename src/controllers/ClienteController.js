//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const Cliente = require("../models/Cliente");

module.exports = {
  //Listar
  async index(req, res) {
    const { _idUsuario } = req.body;
    let cliente = await Cliente.find({ usuario: _idUsuario });
    return res.json(cliente);
  },
  //Buscar
  async show(req, res) {
    const { _id } = req.body;

    let cliente = await Cliente.findOne({
      _id
    });

    return res.json(cliente);
  },
  //Criar
  async store(req, res) {
    const { nome, qtdServicos, valorTotalServicos, usuario } = req.body;

    let cliente = await Cliente.create({
      nome,
      qtdServicos,
      valorTotalServicos,
      usuario
    });

    return res.json(cliente);
  },
  //Atualizar
  async update(req, res) {
    const { _id, nome, qtdServicos, valorTotalServicos, usuario } = req.body;

    if (_id) {
      const filtro = { _id };
      const atualizacao = { nome, qtdServicos, valorTotalServicos };
      let cliente = await Cliente.findOneAndUpdate(filtro, atualizacao);
    } else {
      let cliente = await Cliente.create({
        nome: nome,
        qtdServicos: qtdServicos,
        valorTotalServicos: valorTotalServicos,
        usuario
      });
    }

    cliente = await Cliente.findOne({
      _id
    });

    res.json(cliente);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let cliente = await Cliente.findByIdAndDelete({
      _id
    });

    return res.json(cliente);
  }
};
