const mongoose = require("mongoose");

const ServicoSchema = new mongoose.Schema({
  nome: String,
  valor: String,
  data: String,
  qtdTotalServico: String,
  valorTotalServico: String,
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente"
  }
});

module.exports = mongoose.model("servico", ServicoSchema);
