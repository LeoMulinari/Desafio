import ConfirmeButton from '../botao/button';
import Select from '../select/select';
export default function FormsCategorias(props: Submit) {
  return (
    <form onSubmit={props.submit}>
      <div className="categorias">
        <label>Categorias: </label>
        <Select />
        <ConfirmeButton label="request" />
      </div>
    </form>
  );
}
interface Submit {
  submit: any;
  change: any;
}
