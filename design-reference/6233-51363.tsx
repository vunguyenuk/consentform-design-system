const imgProperty124Px = "assets/cliently/6233-51363-24cc8.png";
const imgChevronLeft = "assets/cliently/6233-51363-4809c.svg";
const imgChevronRight = "assets/cliently/6233-51363-eb859.svg";
const imgChevronUp = "assets/cliently/6233-51363-d466c.svg";
const imgBuilding3 = "assets/cliently/6233-51363-1632e.svg";
const imgProperty124Px1 = "assets/cliently/6233-51363-0521d.png";
const imgProperty124Px2 = "assets/cliently/6233-51363-a337c.png";
const imgProperty124Px3 = "assets/cliently/6233-51363-ca72e.png";
const imgAvatarWoman3 = "assets/cliently/6233-51363-6d9b2.png";
const imgMore = "assets/cliently/6233-51363-95bac.svg";
const imgNotification = "assets/cliently/6233-51363-c6c0e.svg";
const imgMessageText = "assets/cliently/6233-51363-7fdbf.svg";
const imgNote = "assets/cliently/6233-51363-3a1a9.svg";
const imgTaskSquare = "assets/cliently/6233-51363-275c0.svg";
const imgVuesaxLinearMessageQuestion = "assets/cliently/6233-51363-3df1b.svg";
const imgSetting = "assets/cliently/6233-51363-7bba3.svg";
const imgCategory = "assets/cliently/6233-51363-4b35d.svg";
const imgProperty132Px = "assets/cliently/6233-51363-75dac.png";
const imgGroup1 = "assets/cliently/6233-51363-72053.svg";
const imgUserOctagon = "assets/cliently/6233-51363-deb54.svg";
const imgArrowDown = "assets/cliently/6233-51363-749f8.svg";
const imgSidebarLeft = "assets/cliently/6233-51363-6ebdb.svg";
const imgArrowDown1 = "assets/cliently/6233-51363-71b71.svg";
const imgAdd = "assets/cliently/6233-51363-509d0.svg";
const imgFolder2 = "assets/cliently/6233-51363-c4cc5.svg";
const imgSetting1 = "assets/cliently/6233-51363-5e44d.svg";
const imgPlus = "assets/cliently/6233-51363-3dab3.svg";
const imgArrowDown2 = "assets/cliently/6233-51363-dbb10.svg";
const imgVuesaxLinearCalendar = "assets/cliently/6233-51363-346c1.svg";
const imgMore1 = "assets/cliently/6233-51363-04859.svg";
const imgClose = "assets/cliently/6233-51363-fc18d.svg";
const imgGroup = "assets/cliently/6233-51363-1f333.svg";
const imgGroup2 = "assets/cliently/6233-51363-46c8e.svg";
const imgBuilding4 = "assets/cliently/6233-51363-67705.svg";
const imgArrowDown3 = "assets/cliently/6233-51363-30905.svg";
const imgLine = "assets/cliently/6233-51363-b402d.svg";
const imgArrowDown4 = "assets/cliently/6233-51363-8aadf.svg";

type ContactStatusProps = {
  className?: string;
  darkmode?: "Off";
  status?: "New Lead";
};

function ContactStatus({ className, darkmode = "Off", status = "New Lead" }: ContactStatusProps) {
  return (
    <div className={className || "bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px]"} data-node-id="4055:27844">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4055:27847">
        New Lead
      </p>
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
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px} width="24" />
    </div>
  );
}

type PaginationProps = {
  className?: string;
  darkmode?: "No";
  responsive?: "No";
  showPages?: boolean;
};

function Pagination({ className, darkmode = "No", responsive = "No", showPages = true }: PaginationProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-between relative w-[1104px]"} data-node-id="4007:289594">
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="4007:289595" data-name="Pages">
        <div className="border border-[#f1f2f4] border-solid content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-node-id="4007:289596" data-name="Prev">
          <div className="relative shrink-0 size-[16px]" data-node-id="4007:289597" data-name="chevron-left">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="4007:289598" data-name="Number">
          <div className="bg-[#f8f8f8] content-stretch flex flex-col items-center justify-center overflow-clip px-[15px] py-[5px] relative rounded-[10px] shrink-0 size-[32px]" data-node-id="4007:289599" data-name="Selection">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289600">
              1
            </p>
          </div>
          {showPages && (
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="4007:289601" data-name="Pages">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[14px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289602" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289603">
                  2
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[14px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289604" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289605">
                  3
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289606" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289607">
                  ...
                </p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[11px] py-[5px] relative shrink-0 size-[32px]" data-node-id="4007:289608" data-name="Selection">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289609">
                  10
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="border border-[#f1f2f4] border-solid content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-node-id="4007:289610" data-name="Next">
          <div className="relative shrink-0 size-[16px]" data-node-id="4007:289611" data-name="chevron-right">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="4007:289612" data-name="Show Data">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289613">
          Showing 1 to 8 of 50 entries
        </p>
        <div className="bg-white border border-[#f1f2f4] border-solid content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-node-id="4007:289614" data-name="Next">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="4007:289615">
            Show 8
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="4007:289616" data-name="chevron-up">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronUp} />
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactStatus1Props = {
  className?: string;
  darkmode?: "Off";
  status?: "Contacted" | "Proposal Sent" | "New Lead" | "Follow-up";
};

function ContactStatus1({ className, darkmode = "Off", status = "New Lead" }: ContactStatus1Props) {
  const isContactedAndOff = status === "Contacted" && darkmode === "Off";
  const isFollowUpAndOff = status === "Follow-up" && darkmode === "Off";
  const isProposalSentAndOff = status === "Proposal Sent" && darkmode === "Off";
  return (
    <div className={className || "bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px]"} id={isFollowUpAndOff ? "node-6155_21223" : isProposalSentAndOff ? "node-6155_21220" : isContactedAndOff ? "node-6155_21217" : "node-6155_21214"}>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" id={isFollowUpAndOff ? "node-6155_21225" : isProposalSentAndOff ? "node-6155_21222" : isContactedAndOff ? "node-6155_21219" : "node-6155_21216"}>
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
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px1} width="24" />
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
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px2} width="24" />
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

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "Off";
  menu?: "Dashboard" | "Help & Center" | "Settings" | "Notifications" | "Emails" | "Notes" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "Off", menu = "Notifications" }: NavMenuProps) {
  const isDashboardAndActiveAndOff = menu === "Dashboard" && active && darkmode === "Off";
  const isEmailsAndNotActiveAndOff = menu === "Emails" && !active && darkmode === "Off";
  const isHelpCenterAndNotActiveAndOff = menu === "Help & Center" && !active && darkmode === "Off";
  const isNotesAndNotActiveAndOff = menu === "Notes" && !active && darkmode === "Off";
  const isNotificationsAndNotActiveAndOff = menu === "Notifications" && !active && darkmode === "Off";
  const isSettingsAndNotActiveAndOff = menu === "Settings" && !active && darkmode === "Off";
  const isTasksAndNotActiveAndOff = menu === "Tasks" && !active && darkmode === "Off";
  return (
    <div className={className || `content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px] ${isDashboardAndActiveAndOff ? "bg-[#e5e5ec]" : ""}`} id={isDashboardAndActiveAndOff ? "node-6155_21338" : isSettingsAndNotActiveAndOff ? "node-6155_21335" : isHelpCenterAndNotActiveAndOff ? "node-6155_21332" : isTasksAndNotActiveAndOff ? "node-6155_21329" : isNotesAndNotActiveAndOff ? "node-6155_21326" : isEmailsAndNotActiveAndOff ? "node-6155_21323" : "node-6155_21320"}>
      {isNotificationsAndNotActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21321" data-name="notification">
            <div className="absolute contents inset-0" data-node-id="I6155:21321;3:36017" data-name="vuesax/linear/notification">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21321;3:36018" data-name="notification">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21322">
            <p className="leading-[1.5]">Notifications</p>
          </div>
        </>
      )}
      {isEmailsAndNotActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21324" data-name="message-text">
            <div className="absolute contents inset-0" data-node-id="I6155:21324;3:14650" data-name="vuesax/linear/message-text">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21324;3:14651" data-name="message-text">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21325">
            <p className="leading-[1.5]">Emails</p>
          </div>
        </>
      )}
      {isNotesAndNotActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21327" data-name="note">
            <div className="absolute contents inset-0" data-node-id="I6155:21327;3:42197" data-name="vuesax/linear/note">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21327;3:42198" data-name="note">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNote} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21328">
            <p className="leading-[1.5]">Notes</p>
          </div>
        </>
      )}
      {isTasksAndNotActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21330" data-name="task-square">
            <div className="absolute contents inset-0" data-node-id="I6155:21330;3:36664" data-name="vuesax/linear/task-square">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21330;3:36665" data-name="task-square">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21331">
            <p className="leading-[1.5]">Tasks</p>
          </div>
        </>
      )}
      {isHelpCenterAndNotActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21333" data-name="message-question">
            <div className="absolute contents inset-0" data-node-id="I6155:21333;3:27563" data-name="vuesax/linear/message-question">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21334">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
        </>
      )}
      {isSettingsAndNotActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21336" data-name="setting">
            <div className="absolute contents inset-0" data-node-id="I6155:21336;3:33830" data-name="vuesax/linear/setting">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21336;3:33831" data-name="setting">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21337">
            <p className="leading-[1.5]">Settings</p>
          </div>
        </>
      )}
      {isDashboardAndActiveAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21339" data-name="category">
            <div className="absolute contents inset-0" data-node-id="I6155:21339;3:33732" data-name="vuesax/linear/category">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21339;3:33733" data-name="category">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21340">
            <p className="leading-[1.5]">Dashboard</p>
          </div>
        </>
      )}
    </div>
  );
}

type AvatarMan1Props = {
  className?: string;
  property1?: "32px";
};

function AvatarMan1({ className, property1 = "32px" }: AvatarMan1Props) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="3:1842">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProperty132Px} width="32" />
    </div>
  );
}

type LogoProps = {
  className?: string;
  landscape?: "Yes";
  showText?: boolean;
  size?: "Small";
};

function Logo({ className, landscape = "Yes", showText = true, size = "Small" }: LogoProps) {
  return (
    <div className={className || "content-stretch flex gap-[7px] items-center relative"} data-node-id="3:1639">
      <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="20:1732" data-name="Logo">
        <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
        <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="20:1733">
          <div className="-scale-y-100 flex-none rotate-30">
            <div className="h-[32.972px] relative w-[31.973px]">
              <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="6004:52006" data-name="user-octagon">
          <div className="absolute contents inset-0" data-node-id="I6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
            <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6004:52006;3:13120" data-name="user-octagon">
              <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
      </div>
      {showText && (
        <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[#161618] text-[16.212px] tracking-[-0.6485px] whitespace-nowrap" data-node-id="20:1850">
          Cliently
        </p>
      )}
    </div>
  );
}

type NavigationProps = {
  className?: string;
  darkmode?: "Off";
};

function Navigation({ className, darkmode = "Off" }: NavigationProps) {
  return (
    <div className={className || "bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-[1024px] items-end overflow-clip p-[16px] relative w-[260px]"} data-node-id="6155:48560">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6155:47521" data-name="Logo">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="6155:47522" data-name="Company">
          <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
          <div className="relative shrink-0 size-[14px]" data-node-id="6155:47524" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6155:47524;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[20px]" data-node-id="6155:47525" data-name="sidebar-left">
          <div className="absolute contents inset-0" data-node-id="I6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
            <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6155:47525;3:34670" data-name="sidebar-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="6155:47526" data-name="Profile">
        <AvatarMan1 className="relative shrink-0 size-[32px]" />
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="6155:47528" data-name="Name">
          <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="6155:47529">
            <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="6155:47530">
            <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
          </div>
        </div>
        <div className="relative shrink-0 size-[14px]" data-node-id="6155:47531" data-name="arrow-down">
          <div className="absolute contents inset-0" data-node-id="I6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
            <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6155:47531;3:11319" data-name="arrow-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="6155:47532" data-name="Menu">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="6155:47533" data-name="Main Menu">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="6155:47534">
            <p className="leading-[normal]">Main Menu</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6155:47535" data-name="Main Menu">
            <NavMenu active className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Dashboard" />
            <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
            <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
            <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
            <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="6155:47541" data-name="Favorite">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="6155:47542">
            <div className="relative shrink-0 size-[14px]" data-node-id="6155:47543" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6155:47543;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="6155:47544">
              <p className="leading-[normal]">Favorites</p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="6155:47545" data-name="add">
              <div className="absolute contents inset-0" data-node-id="I6155:47545;3:29466" data-name="vuesax/linear/add">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6155:47545;3:29467" data-name="add">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6155:47546">
            <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="6155:47547" data-name="Favorite">
              <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="6155:47548" data-name="btn">
                <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="6155:47549" data-name="folder-2">
                  <div className="absolute contents inset-0" data-node-id="I6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                    <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6155:47549;3:13884" data-name="folder-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47550">
                <p className="leading-[1.5]">Primor Project</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="6155:47551" data-name="Favorite">
              <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="6155:47552" data-name="btn">
                <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="6155:47553" data-name="folder-2">
                  <div className="absolute contents inset-0" data-node-id="I6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                    <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6155:47553;3:13884" data-name="folder-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47554">
                <p className="leading-[1.5]">Sulivan Project</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="6155:47555" data-name="Favorite">
              <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="6155:47556" data-name="btn">
                <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="6155:47557" data-name="folder-2">
                  <div className="absolute contents inset-0" data-node-id="I6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                    <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6155:47557;3:13884" data-name="folder-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47558">
                <p className="leading-[1.5]">Trustworth Project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6155:47559" data-name="Other">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="6155:47560">
            <p className="leading-[normal]">Other</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6155:47561" data-name="Menu">
            <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
            <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
          </div>
        </div>
      </div>
    </div>
  );
}

type LDashboardPageCreateNewLeadsProps = {
  className?: string;
  responsive?: "No";
};

function LDashboardPageCreateNewLeads({ className, responsive = "No" }: LDashboardPageCreateNewLeadsProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-center justify-center overflow-clip relative w-[1440px]"} data-node-id="6233:51363">
      <Navigation className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" />
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6064:27694" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6064:27695" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6064:27696">
            <p className="leading-[1.5]">Dashboard</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6064:27697" data-name="Buttons">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="6064:27698" data-name="Avatars">
              <div className="border-[1.5px] border-solid border-white mr-[-5px] relative rounded-[100px] shrink-0 size-[24px]" data-node-id="6064:27699" data-name="Avatar/Man/4">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px} width="24" />
              </div>
              <div className="border-[1.5px] border-solid border-white mr-[-5px] relative rounded-[100px] shrink-0 size-[24px]" data-node-id="6064:27700" data-name="Avatar/Man/2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px1} width="24" />
              </div>
              <div className="border-[1.5px] border-solid border-white relative rounded-[100px] shrink-0 size-[24px]" data-node-id="6064:27701" data-name="Avatar/Woman/3">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgAvatarWoman3} width="24" />
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6064:27702" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[134px]" data-node-id="6064:27703" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6064:27703;6155:20984" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6064:27703;6155:20985">
                  View Settings
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[134px]" data-node-id="6064:27704" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6064:27704;6155:20984" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6064:27704;6155:20985">
                  Import/Export
                </p>
              </div>
              <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[74px]" data-node-id="6064:27705" data-name="Button">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                <div className="relative shrink-0 size-[16px]" data-node-id="I6064:27705;6155:20976" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6064:27705;6155:20977">
                  New
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="6064:27706" data-name="Main Content">
          <div className="border-[#f1f1f5] border-b border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative shrink-0 w-full" data-node-id="6064:27707" data-name="Cards">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6064:27708" data-name="Headline">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="6064:27709">{`Welcome Back, Ali Husni 👋 `}</p>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[94px]" data-node-id="6064:27710" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6064:27710;6155:20985">
                  Monthly
                </p>
                <div className="relative shrink-0 size-[16px]" data-node-id="I6064:27710;6155:20986" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown2} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6064:27711" data-name="Headcount">
              <AllCard cardName="Total Deals Closed" className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col h-[101px] items-start justify-between min-w-px overflow-clip p-[16px] relative rounded-[10px]" mainText="45" secText="+10% from last month" showAvatar={false} />
              <AllCard cardName="Revenue Generated" className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col h-[101px] items-start justify-between min-w-px overflow-clip p-[16px] relative rounded-[10px]" mainText="$75,250" secText="+10% from last month" showAvatar={false} />
              <AllCard className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col h-[101px] items-start justify-between min-w-px overflow-clip p-[16px] relative rounded-[10px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6064:27729" data-name="Table">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6064:27730" data-name="Head">
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="6064:27731" data-name="Headline">
                <div className="relative shrink-0 size-[20px]" data-node-id="6064:27732" data-name="calendar">
                  <div className="absolute contents inset-0" data-node-id="I6064:27732;3:28112" data-name="vuesax/linear/calendar">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearCalendar} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6064:27733">{`Leads & Contacts Table`}</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6064:27734" data-name="Buttons">
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[84px]" data-node-id="6064:27735" data-name="Button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6064:27735;4006:547" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6064:27735;4006:548">
                    Sort
                  </p>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[92px]" data-node-id="6064:27736" data-name="Button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6064:27736;4006:547" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6064:27736;4006:548">
                    Filter
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-[rgba(226,228,233,0.3)] border-solid content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="6166:44254" data-name="Table Head">
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[216px]" data-node-id="6166:44255" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44256">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6166:44257" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44257;6155:21200" data-name="Checklist / Disable / Light" />
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#44444a] text-[12px] tracking-[-0.24px]" data-node-id="6166:44258">
                    Lead Name
                  </p>
                </div>
              </div>
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[170px]" data-node-id="6166:44259" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6166:44260">
                  Company
                </p>
              </div>
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[180px]" data-node-id="6166:44261" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6166:44262">
                  Email Address
                </p>
              </div>
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[160px]" data-node-id="6166:44263" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6166:44264">
                  Phone Number
                </p>
              </div>
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[125px]" data-node-id="6166:44265" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6166:44266">
                  Status
                </p>
              </div>
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[130px]" data-node-id="6166:44267" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6166:44268">
                  Last Contacted
                </p>
              </div>
              <div className="bg-[#f9f9fb] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[130px]" data-node-id="6166:44269" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6166:44270">
                  Next Follow-Up
                </p>
              </div>
              <div className="bg-[#f9f9fb] flex-[1_0_0] h-[40px] min-w-px relative" data-node-id="6166:44271" data-name="Card" />
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6166:44272" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[216px]" data-node-id="6166:44273" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44274" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44275">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44276" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44276;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarMan4 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44278">
                      John Carter
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44279" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44280">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44281" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44281;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarWoman1 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44283">
                      Emily Davis
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44284" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44285">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44286" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44286;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarMan3 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44288">
                      TechNova Inc.
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44289" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44290">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44291" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44291;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarMan2 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44293">
                      Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44294" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44295">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44296" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44296;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarMan4 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44298">
                      John Carter
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44299" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44300">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44301" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44301;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarWoman1 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44303">
                      Emily Davis
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44304" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44305">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44306" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44306;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarMan3 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44308">
                      TechNova Inc.
                    </p>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44309" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6166:44310">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6166:44311" data-name="Checklist">
                      <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6166:44311;6155:21200" data-name="Checklist / Disable / Light" />
                    </div>
                    <AvatarMan2 className="relative shrink-0 size-[24px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44313">
                      Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170px]" data-node-id="6166:44314" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44315" data-name="Card">
                  <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44317">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44318" data-name="Card">
                  <CompanyIcon className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="2" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44320">
                    BrightCorp
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44321" data-name="Card">
                  <CompanyIcon className="bg-[#4d41f3] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="3" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44323">
                    TechNova
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44324" data-name="Card">
                  <CompanyIcon className="bg-[#3f8d13] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="4" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44326">
                    GreenTech
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44327" data-name="Card">
                  <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44329">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44330" data-name="Card">
                  <CompanyIcon className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="2" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44332">
                    BrightCorp
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44333" data-name="Card">
                  <CompanyIcon className="bg-[#4d41f3] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="3" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44335">
                    TechNova
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44336" data-name="Card">
                  <CompanyIcon className="bg-[#3f8d13] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] shrink-0 size-[24px]" variant="4" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6166:44338">
                    GreenTech
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]" data-node-id="6166:44339" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44340" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44341">
                    john@brightcorp.com
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44342" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44343">
                    emily@davistech.io
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44344" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44345">
                    sales@technova.com
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44346" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44347">
                    alex@greentech.com
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44348" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44349">
                    john@brightcorp.com
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44350" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44351">
                    emily@davistech.io
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44352" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44353">
                    sales@technova.com
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44354" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44355">
                    alex@greentech.com
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-node-id="6166:44356" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44357" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44358">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44359" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44360">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44361" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44362">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44363" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44364">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44365" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44366">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44367" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44368">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44369" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44370">
                    (555) 123-4567
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44371" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44372">
                    (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-node-id="6166:44373" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44374" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44376" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Proposal Sent" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44378" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Contacted" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44380" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Follow-up" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44382" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44384" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Proposal Sent" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44386" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Contacted" />
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44388" data-name="Card">
                  <ContactStatus1 className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Follow-up" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]" data-node-id="6166:44390" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44391" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44392">
                    Mar 3, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44393" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44394">
                    Mar 5, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44395" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44396">
                    Mar 6, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44397" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44398">
                    Mar 2, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44399" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44400">
                    Mar 3, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44401" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44402">
                    Mar 5, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44403" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44404">
                    Mar 6, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44405" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44406">
                    Mar 2, 2025
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]" data-node-id="6166:44407" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44408" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44409">
                    Mar 8, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44410" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44411">
                    Mar 9, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44412" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44413">
                    Mar 10, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44414" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44415">
                    Mar 12, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44416" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44417">
                    Mar 8, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44418" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44419">
                    Mar 9, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44420" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44421">
                    Mar 10, 2025
                  </p>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44422" data-name="Card">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6166:44423">
                    Mar 12, 2025
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="6166:44424" data-name="Row">
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44425" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44426">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44426;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44426;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44427" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44428">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44428;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44428;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44429" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44430">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44430;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44430;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44431" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44432">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44432;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44432;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44433" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44434">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44434;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44434;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44435" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44436">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44436;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44436;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44437" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44438">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44438;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44438;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#f3f4f6] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6166:44439" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6166:44440">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6166:44440;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6166:44440;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6064:27932" data-name="Paggination">
              <Pagination className="content-stretch flex items-center justify-between relative shrink-0 w-[1104px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col h-[900px] items-center justify-center left-0 overflow-clip p-[10px] top-0 w-[1440px]" data-node-id="6064:28285" data-name="Popup">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-[609px]" data-node-id="6064:28286" data-name="Modal">
          <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6064:28287" data-name="Head">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-px not-italic relative text-[#252528] text-[18px] tracking-[-0.36px]" data-node-id="6064:28288">{`Create New Leads & Contacts `}</p>
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6232:47021" data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6232:47021;6155:20944" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClose} />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative shrink-0 w-full" data-node-id="6064:28291" data-name="Main">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="6064:28292" data-name="Fields">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6064:28293" data-name="Field">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28294" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="6064:28295" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6064:28296">
                      Lead Name
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="6064:28298" data-name="Input Area">
                    <AvatarMan4 className="relative shrink-0 size-[24px]" />
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="6064:28300">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">John Carter</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28302" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28302;4006:205" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28302;4006:206">
                      Email Address
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28302;4006:208" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28302;4006:209">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">john@brightcorp.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6064:28303" data-name="Field">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28304" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28304;4006:244" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28304;4006:245">
                      Phone Number
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28304;4006:247" data-name="Input Area">
                    <div className="border-[#f1f1f5] border-r border-solid content-stretch flex gap-[10px] h-[48px] items-center p-[16px] relative shrink-0 w-[71px]" data-node-id="I6064:28304;4006:248" data-name="Input Area">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I6064:28304;4006:249" data-name="circle-flags:us">
                        <div className="absolute contents inset-0" data-node-id="I6064:28304;4006:250" data-name="Mask group">
                          <div className="absolute inset-0 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-size-[20px_20px]" data-node-id="I6064:28304;4006:253" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 size-[14px]" data-node-id="I6064:28304;4006:258" data-name="arrow-down">
                        <div className="absolute contents inset-0" data-node-id="I6064:28304;4006:258;2313:8342" data-name="vuesax/linear/arrow-down">
                          <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6064:28304;4006:258;2313:8343" data-name="arrow-down">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28304;4006:259">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28305" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="6064:28306" data-name="area title">
                    <p className="[word-break:break-word] font-['Poppins:Regular'] leading-[1.3] not-italic relative shrink-0 text-[#161618] text-[12px] whitespace-nowrap" data-node-id="6064:28307">
                      Company
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex h-[48px] items-center justify-between p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="6064:28309" data-name="Input Area">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6064:28310">
                      <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6064:28311" data-name="btn">
                        <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6064:28312" data-name="building-3">
                          <div className="absolute contents inset-0" data-node-id="I6064:28312;3:22442" data-name="vuesax/bold/building-3">
                            <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6064:28312;3:22443" data-name="building-3">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding4} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6064:28313">
                        Davis Tech
                      </p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="6064:28314" data-name="arrow-down">
                      <div className="absolute contents inset-0" data-node-id="I6064:28314;3:11318" data-name="vuesax/linear/arrow-down">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6064:28314;3:11319" data-name="arrow-down">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="6064:28315" data-name="Field">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28316" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="6064:28317" data-name="area title">
                    <p className="[word-break:break-word] font-['Poppins:Regular'] leading-[1.3] not-italic relative shrink-0 text-[#161618] text-[12px] whitespace-nowrap" data-node-id="6064:28318">
                      Status
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex h-[48px] items-center justify-between p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="6064:28320" data-name="Input Area">
                    <ContactStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
                    <div className="relative shrink-0 size-[16px]" data-node-id="6064:28322" data-name="arrow-down">
                      <div className="absolute contents inset-0" data-node-id="I6064:28322;3:11318" data-name="vuesax/linear/arrow-down">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6064:28322;3:11319" data-name="arrow-down">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28323" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28323;4006:205" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28323;4006:206">
                      Follow-Up
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28323;4006:208" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28323;4006:209">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">Mar 8, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6064:28324" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="6064:28325" data-name="Fields">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6064:28326" data-name="Field">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28327" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28327;4006:205" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28327;4006:206">
                      Lead Name
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28327;4006:208" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28327;4006:209">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">Website Form</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28328" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28328;4006:205" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28328;4006:206">
                      Industry
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28328;4006:208" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28328;4006:209">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">SaaS</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I6064:28328;4006:210" data-name="eye-off">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6064:28329" data-name="Field">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28330" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28330;4006:205" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28330;4006:206">
                      Estimated Deal Value
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28330;4006:208" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28330;4006:209">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">$10,000</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6064:28331" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6064:28331;4006:205" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6064:28331;4006:206">
                      Tags
                    </p>
                  </div>
                  <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6064:28331;4006:208" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28331;4006:209">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">High-priority</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I6064:28331;4006:210" data-name="eye-off">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[#f1f1f5] border-solid border-t content-stretch flex gap-[12px] items-center justify-end p-[24px] relative shrink-0 w-full" data-node-id="6064:28332" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6064:28333" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28333;6155:20945">
                Cancel
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6064:28334" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6064:28334;6155:20937">
                Save
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
