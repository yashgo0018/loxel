import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Modal from "../common/Modal";
import Navbar from "../common/Navbar";
import PopupDrawer from "../common/PopupDrawer";
import usePopoverDrawer from "../hooks/usePopoverDrawer";
import { twMerge } from "tailwind-merge";

export default function Default() {
  const drawer = usePopoverDrawer();

  return (
    <main className="relative">
      <Modal />
      <PopupDrawer />

      <div
        className={twMerge(
          "duration-500",
          drawer.element != null && "scale-[98%]"
        )}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}
