const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nome: String,
  qtdServicos: String,
  valorTotalServicos: String,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  }
});

module.exports = mongoose.model("cliente", ClienteSchema);
