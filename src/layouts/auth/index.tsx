import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { AuthHandles } from "./types";

const AuthLayout: React.FC<AuthHandles> = ({
  title,
  description,
  children,
}) => {


  return (
    <main>
      <aside>
        <div className="">

        </div>
      </aside>

      <div className="">

      </div>
    </main>
  );
};

export default AuthLayout;
