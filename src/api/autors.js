import axios from "axios";
export default class AutorsApi {
  async buscarTodosOsAutors() {
    const { data } = await axios.get("/autors/");
    return data.results;
  }
  async adicionarAutor(autor) {
    const { data } = await axios.post("/autors/", autor);
    return data.results;
  }
  async atualizarAutor(autor) {
    const { data } = await axios.put(`/autors/${autor.id}/`, autor);
    return data.results;
  }
  async excluirAutor(id) {
    const { data } = await axios.delete(`/autors/${id}/`);
    return data.results;
  }
}