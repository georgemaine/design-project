import { a, Interpolation } from "@react-spring/web";
import { memo } from "react";

const LogoWhiteSvg = () => {
  return (
    <svg viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M51.9892 46.6672C64.4591 59.1371 55.6274 80.4587 37.9923 80.4587H31.6291V64.4225H47.0661L14 31.3564H36.6785L51.9892 46.6672Z"
        fill="white"
      />
      <path
        d="M111.341 47.3842H66.6228L99.6972 80.4585H77.0186L61.6997 65.1396C49.2298 52.6697 58.0615 31.3481 75.6966 31.3481H106.296C108.739 36.3229 110.466 41.7131 111.341 47.3842Z"
        fill="white"
      />
    </svg>
  );
};

const LogoBlackSvg = () => {
  return (
    <svg
      width="31"
      height="15"
      viewBox="0 0 31 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.74 4.90866C14.3534 8.522 11.7942 14.7003 6.68431 14.7003H4.67968V10.0536H9.3135L0 0.735352H6.57119L10.74 4.90866Z"
        fill="black"
      />
      <path
        d="M13.5301 10.5299C9.9168 6.9166 12.4759 0.738281 17.5856 0.738282L30.2827 0.738281V5.38503H14.9566L24.2724 14.701H17.7008L13.5301 10.5299Z"
        fill="black"
      />
    </svg>
  );
};

interface CheckBoxSvgProps {
  progress: Interpolation<number, number>;
}

const CheckBoxSvg = (props: CheckBoxSvgProps) => {
  const { progress } = props;

  return (
    <svg className="mr-2" width="32" height="32" viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd" transform="translate(6 6)">
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.692 0h4.616c2.675 0 3.645.278 4.623.801.977.523 1.745 1.29 2.268 2.268.523.978.801 1.948.801 4.623v4.616c0 2.675-.278 3.645-.801 4.623-.523.977-1.29 1.745-2.268 2.268-.978.523-1.948.801-4.623.801H7.692c-2.675 0-3.645-.278-4.623-.801-.977-.523-1.745-1.29-2.268-2.268C.278 15.953 0 14.983 0 12.308V7.692c0-2.675.278-3.645.801-4.623.523-.977 1.29-1.745 2.268-2.268C4.047.278 5.017 0 7.692 0z"
        ></path>
        <a.path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.2 11.2L8.8 14.2 14.8 5.8"
          strokeDasharray="16"
          strokeDashoffset={progress || 0}
        />
      </g>
    </svg>
  );
};

export const CheckBoxSvgMemo = memo(CheckBoxSvg);

const Checkmark = ({ className }: { className?: string }) => (
  <svg width="32px" height="32px" viewBox="0 0 32 32" className={className}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-1501.000000, -322.000000)" fill="#FFFFFF">
        <g transform="translate(285.000000, 153.000000)">
          <g transform="translate(1002.000000, 111.000000)">
            <g transform="translate(0.000000, 18.000000)">
              <g transform="translate(0.000000, 36.000000)">
                <g transform="translate(214.000000, 4.000000)">
                  <path
                    d="M15.1866732,20.4411951 C14.6946629,20.9196016 13.8962511,20.9196016 13.4042409,20.4411951 L10.0706505,17.1997762 C9.44311649,16.589593 9.44311649,15.6012682 10.0706505,14.9925174 L10.0942199,14.9695998 C10.7202808,14.360849 11.7367092,14.360849 12.3627701,14.9710321 L14.295457,16.851714 L19.6383347,11.6565631 C20.2658687,11.0478123 21.280824,11.0478123 21.9068849,11.6565631 L21.9304543,11.6794808 C22.5565152,12.2882316 22.5565152,13.275124 21.9304543,13.8838748 L15.1866732,20.4411951 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
interface AnthropicCompanyLogoProps {
  className?: string;
}

const AnthropicCompanyLogo = (props: AnthropicCompanyLogoProps) => {
  const { className } = props;
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 46 32">
      <path
        d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z"
        fill="#000000"
      ></path>
    </svg>
  );
};
export { LogoWhiteSvg, LogoBlackSvg, Checkmark, AnthropicCompanyLogo };
