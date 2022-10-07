import Link from 'next/link'
import data from "../utils/data";

export default function Fliter_Products({products}) {

  return (
    <div>
      <form className="form_cont">
        <label>categorias</label>
        <select name="Categoris" id="" className="select_categorias">
          <option value="camisas">
            camisas
          </option>
          <option value="pantalones">pantalones</option>
          <option value="tenis">tenis</option>
          <option value="ropa interior">ropa interior</option>
        </select>
      </form>
    </div>
  );
}
