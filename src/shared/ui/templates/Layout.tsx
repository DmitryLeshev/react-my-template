import { Outlet } from "react-router";
import { theme } from "shared/config";

type Props = {
  header?: React.ReactElement;
  footer?: React.ReactElement;
  leftbar?: React.ReactElement;
};
export const Layout: React.FC<Props> = ({ header, footer, leftbar }) => {
  const shift = leftbar?.props?.isHidden ? 0 : theme.leftbar.width;

  return (
    <>
      {header && header}
      <main
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
        }}
      >
        {leftbar && leftbar}
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            transition: "0.3s all",
            marginLeft: leftbar ? shift : 0,
            background: "green",
          }}
        >
          <Outlet />
        </section>
      </main>
      {footer && footer}
    </>
  );
};
