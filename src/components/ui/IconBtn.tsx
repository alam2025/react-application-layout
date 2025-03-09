/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Trash } from "lucide-react";
import { ReactNode } from "react";

type TProps = {
  btnClass?: string;
  onClick: (e?: any) => void;
  label: string;
  icon?: ReactNode;
  disable?: any;
};

const IconBtn = ({
  onClick,
  icon,
  label,
  btnClass,
  disable = false,
}: TProps) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={clsx("primary-btn  ", btnClass)}
    >
      <div className="flex-center gap-2 z-10 relative">
        {icon} {label}
      </div>
    </button>
  );
};

// ------------- cancel/ danger btn ------------
export default IconBtn;

type TDangerBtnProps = {
  btnClass?: string;
  onClick: (e?: any) => void;
  text: string;
  icon?: ReactNode;
  showIcon?: boolean;
};

export const DangerButton = ({
  onClick,
  icon,
  text,
  btnClass,
  showIcon = false,
}: TDangerBtnProps) => {
  return (
    <button onClick={onClick} className={clsx("danger-btn", btnClass)}>
      <div className="flex-center gap-2 z-10 relative">
        {icon ? icon : showIcon && <Trash size={16} />} {text}
      </div>
    </button>
  );
};
