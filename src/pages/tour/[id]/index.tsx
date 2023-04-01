import { Tours } from "../../../utils/toursdata";
import { useRouter } from "next/router";

const TourPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const tour = Tours.find((t) => t.id === parseInt(id as string));
  console.log(tour);
  return <div> Hello </div>;
};

export default TourPage;
