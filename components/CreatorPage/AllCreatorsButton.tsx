import Button from '../Commons/Button';
import { TiArrowBack } from "react-icons/ti";

function AllCreatorsButton({ className = '' }) {
  return (
    <Button
      className={`w-full flex justify-center items-center gap-2 py-2 !rounded-none ${className}`}
      href="/creators"
      variant="primary">
      All creators
      <TiArrowBack size={20} />
    </Button>
  )
}

export default AllCreatorsButton;