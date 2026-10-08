const imgChevronLeft = "assets/cliently/6233-50953-32e71.svg";
const imgChevronRight = "assets/cliently/6233-50953-c81ee.svg";
const imgChevronUp = "assets/cliently/6233-50953-3641a.svg";
const imgBuilding3 = "assets/cliently/6233-50953-1632e.svg";
const imgProperty124Px = "assets/cliently/6233-50953-0521d.png";
const imgProperty124Px1 = "assets/cliently/6233-50953-a337c.png";
const imgProperty124Px2 = "assets/cliently/6233-50953-ca72e.png";
const imgProperty124Px3 = "assets/cliently/6233-50953-24cc8.png";
const imgAvatarWoman3 = "assets/cliently/6233-50953-6d9b2.png";
const imgMore = "assets/cliently/6233-50953-95bac.svg";
const imgMobileSignal = "assets/cliently/6233-50953-4f5a4.svg";
const imgWifi = "assets/cliently/6233-50953-f9d7f.svg";
const imgBattery = "assets/cliently/6233-50953-8ea6f.svg";
const imgVuesaxLinearMenu = "assets/cliently/6233-50953-985bc.svg";
const imgDocumentUpload = "assets/cliently/6233-50953-5e44d.svg";
const imgPlus = "assets/cliently/6233-50953-3dab3.svg";
const imgArrowDown = "assets/cliently/6233-50953-dbb10.svg";
const imgVuesaxLinearCalendar = "assets/cliently/6233-50953-346c1.svg";
const imgMore1 = "assets/cliently/6233-50953-04859.svg";

type PaginationProps = {
  className?: string;
  darkmode?: "No";
  responsive?: "Yes";
  showPages?: boolean;
};

function Pagination({ className, darkmode = "No", responsive = "Yes", showPages = true }: PaginationProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start relative w-[272px]"} data-node-id="4007:289617">
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-node-id="4007:289618" data-name="Pages">
        <div className="border border-[#f1f2f4] border-solid content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-node-id="4007:289619" data-name="Prev">
          <div className="relative shrink-0 size-[16px]" data-node-id="4007:289620" data-name="chevron-left">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-node-id="4007:289621" data-name="Number">
          <div className="bg-[#f8f8f8] content-stretch flex flex-col items-center justify-center overflow-clip px-[15px] py-[5px] relative rounded-[10px] shrink-0 size-[32px]" data-node-id="4007:289622" data-name="Selection">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289623">
              1
            </p>
          </div>
          {showPages && (
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="4007:289624" data-name="Pages">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[14px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289625" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289626">
                  2
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[14px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289627" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289628">
                  3
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289629" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289630">
                  ...
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289631" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289632">
                  10
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="border border-[#f1f2f4] border-solid content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-node-id="4007:289633" data-name="Next">
          <div className="relative shrink-0 size-[16px]" data-node-id="4007:289634" data-name="chevron-right">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="4007:289635" data-name="Show Data">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#687588] text-[12px] tracking-[-0.24px]" data-node-id="4007:289636">
          Showing 1 to 8 of 50 entries
        </p>
        <div className="bg-white border border-[#f1f2f4] border-solid content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-node-id="4007:289637" data-name="Next">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289638">
            Show 8
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="4007:289639" data-name="chevron-up">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronUp} />
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactStatusProps = {
  className?: string;
  darkmode?: "Off";
  status?: "Contacted" | "Proposal Sent" | "New Lead" | "Follow-up";
};

function ContactStatus({ className, darkmode = "Off", status = "New Lead" }: ContactStatusProps) {
  const isContactedAndOff = status === "Contacted" && darkmode === "Off";
  const isFollowUpAndOff = status === "Follow-up" && darkmode === "Off";
  const isProposalSentAndOff = status === "Proposal Sent" && darkmode === "Off";
  return (
    <div className={className || "bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px]"} id={isFollowUpAndOff ? "node-6047_86726" : isProposalSentAndOff ? "node-4055_27852" : isContactedAndOff ? "node-4055_27848" : "node-4055_27844"}>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" id={isFollowUpAndOff ? "node-6047_86729" : isProposalSentAndOff ? "node-4055_27855" : isContactedAndOff ? "node-4055_27851" : "node-4055_27847"}>
        {isFollowUpAndOff ? "Follow-up" : isProposalSentAndOff ? "Proposal Sent" : isContactedAndOff ? "Contacted" : "New Lead"}
      </p>
    </div>
  );
}

type CompanyIconProps = {
  className?: string;
  variant?: "1" | "2" | "3" | "4";
};

function CompanyIcon({ className, variant = "1" }: CompanyIconProps) {
  const is2 = variant === "2";
  const is3 = variant === "3";
  const is4 = variant === "4";
  return (
    <div className={className || `border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] size-[24px] ${is4 ? "bg-[#3f8d13]" : is3 ? "bg-[#4d41f3]" : is2 ? "bg-[#ff4935]" : "bg-[#252528]"}`} id={is4 ? "node-6116_17896" : is3 ? "node-6116_17895" : is2 ? "node-6116_17893" : "node-6116_17894"}>
      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" id={is4 ? "node-6116_17834" : is3 ? "node-6116_17830" : is2 ? "node-6116_17826" : "node-6116_17822"} data-name="building-3">
        <div className="absolute contents inset-0" id={is4 ? "node-I6116_17834-3_22442" : is3 ? "node-I6116_17830-3_22442" : is2 ? "node-I6116_17826-3_22442" : "node-I6116_17822-3_22442"} data-name="vuesax/bold/building-3">
          <div className="absolute inset-[0_-71.43%_-71.43%_0]" id={is4 ? "node-I6116_17834-3_22443" : is3 ? "node-I6116_17830-3_22443" : is2 ? "node-I6116_17826-3_22443" : "node-I6116_17822-3_22443"} data-name="building-3">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
          </div>
        </div>
      </div>
    </div>
  );
}

type AvatarMan2Props = {
  className?: string;
  property1?: "24px";
};

function AvatarMan2({ className, property1 = "24px" }: AvatarMan2Props) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="3:1855">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px} width="24" />
    </div>
  );
}

type AvatarMan3Props = {
  className?: string;
  property1?: "24px";
};

function AvatarMan3({ className, property1 = "24px" }: AvatarMan3Props) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="3:1866">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px1} width="24" />
    </div>
  );
}

type AvatarWoman1Props = {
  className?: string;
  property1?: "24px";
};

function AvatarWoman1({ className, property1 = "24px" }: AvatarWoman1Props) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="3:1800">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px2} width="24" />
    </div>
  );
}

type AvatarMan4Props = {
  className?: string;
  property1?: "24px";
};

function AvatarMan4({ className, property1 = "24px" }: AvatarMan4Props) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="3:1877">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px3} width="24" />
    </div>
  );
}

type AllCardProps = {
  className?: string;
  cardName?: string;
  darkmode?: "Off";
  mainText?: string;
  secText?: string;
  showAvatar?: boolean;
  typeCard?: "Headcount";
};

function AllCard({ className, cardName = "Top Sales Rep", darkmode = "Off", mainText = "Sarah T", secText = "15 deals closed", showAvatar = true, typeCard = "Headcount" }: AllCardProps) {
  return (
    <div className={className || "bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-col h-[101px] items-start justify-between overflow-clip p-[16px] relative rounded-[10px] w-[366.667px]"} data-node-id="6155:20919">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6155:20920" data-name="Headline">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:20921">
          {cardName}
        </p>
        <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6155:20922">
          <div className="-rotate-90 flex-none">
            <div className="relative size-[16px]" data-name="more">
              <div className="absolute contents inset-0" data-node-id="I6155:20922;3:34106" data-name="vuesax/linear/more">
                <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:20922;3:34107" data-name="more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-node-id="6155:20923" data-name="Text">
        {showAvatar && (
          <div className="border-[1.5px] border-solid border-white relative rounded-[100px] shrink-0 size-[24px]" data-node-id="6155:20924" data-name="Avatar/Woman/3">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarWoman3} width="24" />
          </div>
        )}
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold h-[29px] leading-[1.5] min-w-px not-italic relative text-[#252528] text-[24px] tracking-[-0.72px]" data-node-id="6155:20925">
          {mainText}
        </p>
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6155:20926">
          {secText}
        </p>
      </div>
    </div>
  );
}

type NativeStatusBarProps = {
  className?: string;
  darkMode?: "Off";
};

function NativeStatusBar({ className, darkMode = "Off" }: NativeStatusBarProps) {
  return (
    <div className={className || "h-[44px] relative w-[375px]"} data-node-id="20:3234">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] left-[30px] not-italic text-[#020408] text-[16px] top-1/2 whitespace-nowrap" data-node-id="20:3235">
        <p className="leading-[16px]">9:41</p>
      </div>
      <div className="absolute content-stretch flex gap-[5px] items-center left-[283px] top-[15px]" data-node-id="20:3236" data-name="Status Phone">
        <div className="h-[10px] relative shrink-0 w-[18px]" data-node-id="20:3237" data-name="Mobile Signal">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMobileSignal} />
        </div>
        <div className="h-[10.965px] relative shrink-0 w-[15.272px]" data-node-id="20:3243" data-name="Wifi">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="20:3248" data-name="Battery">
          <div className="col-1 h-[13px] ml-0 mt-0 relative row-1 w-[26.978px]" data-node-id="20:3249" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
        </div>
      </div>
    </div>
  );
}

type LDashboardProps = {
  className?: string;
  responsive?: "Yes";
};

function LDashboard({ className, responsive = "Yes" }: LDashboardProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[375px]"} data-node-id="6233:50953">
      <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-node-id="6047:87793" data-name="Main">
        <NativeStatusBar className="h-[44px] relative shrink-0 w-[375px]" />
        <div className="border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6047:87795" data-name="Head">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6047:88016" data-name="Name">
            <div className="relative shrink-0 size-[24px]" data-node-id="6047:88009" data-name="menu">
              <div className="absolute contents inset-0" data-node-id="I6047:88009;3:30558" data-name="vuesax/linear/menu">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMenu} />
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="6047:87970">
              <p className="leading-[1.5]">Dashboard</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6047:87976" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6047:87978" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I6047:87978;6155:20984" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDocumentUpload} />
              </div>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[74px]" data-node-id="6047:87979" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6047:87979;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6047:87979;6155:20977">
                New
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6047:87940" data-name="Headcount">
          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="6047:87941" data-name="Headline">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px] w-[154px]" data-node-id="6047:87942">{`Welcome Back, Ali Husni 👋 `}</p>
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[94px]" data-node-id="6047:87943" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6047:87943;6155:20985">
                Monthly
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="I6047:87943;6155:20986" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6047:87944" data-name="Headcount">
            <AllCard cardName="Total Deals Closed" className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-col h-[101px] items-start justify-between overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" mainText="45" secText="+10% from last month" showAvatar={false} />
            <AllCard cardName="Revenue Generated" className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-col h-[101px] items-start justify-between overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" mainText="$75,250" secText="+10% from last month" showAvatar={false} />
            <AllCard className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-col h-[101px] items-start justify-between overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6048:22547" data-name="Table">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6048:22548" data-name="Head">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="6048:22549" data-name="hEADLINE">
              <div className="relative shrink-0 size-[20px]" data-node-id="6048:22550" data-name="calendar">
                <div className="absolute contents inset-0" data-node-id="I6048:22550;3:28112" data-name="vuesax/linear/calendar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearCalendar} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6048:22551">{`Leads & Contacts Table`}</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6048:22552" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6048:22553" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6048:22553;4006:547" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDocumentUpload} />
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6048:22554" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6048:22554;4006:547" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDocumentUpload} />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[rgba(226,228,233,0.3)] border-solid content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="6048:22555" data-name="Table Head">
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[216px]" data-node-id="6048:22556" data-name="Card">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6048:22557">
                <div className="relative shrink-0 size-[18px]" data-node-id="6166:41931" data-name="Checklist">
                  <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41931;6155:21200" data-name="Checklist / Disable / Light" />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#44444a] text-[12px] tracking-[-0.24px]" data-node-id="6048:22559">
                  Lead Name
                </p>
              </div>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[170px]" data-node-id="6048:22560" data-name="Card">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6048:22561">
                Company
              </p>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[180px]" data-node-id="6048:22562" data-name="Card">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6048:22563">
                Email Address
              </p>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[160px]" data-node-id="6048:22564" data-name="Card">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6048:22565">
                Phone Number
              </p>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[125px]" data-node-id="6048:22566" data-name="Card">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6048:22567">
                Status
              </p>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[130px]" data-node-id="6048:22568" data-name="Card">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6048:22569">
                Last Contacted
              </p>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[130px]" data-node-id="6048:22570" data-name="Card">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6048:22571">
                Next Follow-Up
              </p>
            </div>
            <div className="bg-[#f9f9fb] flex-[1_0_0] h-[40px] min-w-px relative" data-node-id="6048:22572" data-name="Card" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6048:22573" data-name="Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[216px]" data-node-id="6166:41873" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41874" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41875">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41876" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41876;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarMan4 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41878">
                    John Carter
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41879" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41880">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41881" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41881;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarWoman1 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41883">
                    Emily Davis
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41884" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41885">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41886" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41886;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarMan3 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41888">
                    TechNova Inc.
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41889" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41890">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41891" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41891;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarMan2 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41893">
                    Alex Spencer
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41894" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41895">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41896" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41896;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarMan4 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41898">
                    John Carter
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41899" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41900">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41901" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41901;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarWoman1 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41903">
                    Emily Davis
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41904" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41905">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41906" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41906;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarMan3 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41908">
                    TechNova Inc.
                  </p>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:41909" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:41910">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:41911" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:41911;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <AvatarMan2 className="relative shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:41913">
                    Alex Spencer
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170px]" data-node-id="6048:22615" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18718" data-name="Card">
                <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18720">
                  Davis Tech
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18721" data-name="Card">
                <CompanyIcon className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="2" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18723">
                  BrightCorp
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18724" data-name="Card">
                <CompanyIcon className="bg-[#4d41f3] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="3" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18726">
                  TechNova
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18727" data-name="Card">
                <CompanyIcon className="bg-[#3f8d13] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="4" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18729">
                  GreenTech
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18730" data-name="Card">
                <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18732">
                  Davis Tech
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18733" data-name="Card">
                <CompanyIcon className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="2" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18735">
                  BrightCorp
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18736" data-name="Card">
                <CompanyIcon className="bg-[#4d41f3] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="3" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18738">
                  TechNova
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6119:18739" data-name="Card">
                <CompanyIcon className="bg-[#3f8d13] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="4" />
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6119:18741">
                  GreenTech
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]" data-node-id="6048:22648" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22649" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22650">
                  john@brightcorp.com
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22651" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22652">
                  emily@davistech.io
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22653" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22654">
                  sales@technova.com
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22655" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22656">
                  alex@greentech.com
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22657" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22658">
                  john@brightcorp.com
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22659" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22660">
                  emily@davistech.io
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22661" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22662">
                  sales@technova.com
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22663" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22664">
                  alex@greentech.com
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-node-id="6048:22665" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22666" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22667">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22668" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22669">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22670" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22671">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22672" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22673">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22674" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22675">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22676" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22677">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22678" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22679">
                  (555) 123-4567
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22680" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22681">
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-node-id="6048:22682" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22683" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22685" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Proposal Sent" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22687" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Contacted" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22689" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Follow-up" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22691" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22693" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Proposal Sent" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22695" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Contacted" />
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22697" data-name="Card">
                <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Follow-up" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]" data-node-id="6048:22699" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22700" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22701">
                  Mar 3, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22702" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22703">
                  Mar 5, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22704" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22705">
                  Mar 6, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22706" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22707">
                  Mar 2, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22708" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22709">
                  Mar 3, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22710" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22711">
                  Mar 5, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22712" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22713">
                  Mar 6, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22714" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22715">
                  Mar 2, 2025
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]" data-node-id="6048:22716" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22717" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22718">
                  Mar 8, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22719" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22720">
                  Mar 9, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22721" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22722">
                  Mar 10, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22723" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22724">
                  Mar 12, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22725" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22726">
                  Mar 8, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22727" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22728">
                  Mar 9, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22729" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22730">
                  Mar 10, 2025
                </p>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22731" data-name="Card">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6048:22732">
                  Mar 12, 2025
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="6048:22733" data-name="Row">
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22734" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22735">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22735;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22735;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22736" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22737">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22737;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22737;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22738" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22739">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22739;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22739;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22740" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22741">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22741;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22741;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22742" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22743">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22743;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22743;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22744" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22745">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22745;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22745;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22746" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22747">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22747;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22747;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6048:22748" data-name="Card">
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6048:22749">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6048:22749;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6048:22749;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6048:22956" data-name="Slider">
            <div className="bg-[#bebec8] h-[6px] relative rounded-[20px] shrink-0 w-[100px]" data-node-id="6048:23245" />
          </div>
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6048:22750" data-name="Paggination">
            <Pagination className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" />
          </div>
        </div>
      </div>
    </div>
  );
}
