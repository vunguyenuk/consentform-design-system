const assetPathPrefix = "https://www.figma.com/api/mcp/asset/c916f66b-1ad9-4f88-9513-e437da7e26a7";
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgProperty124Px = `${assetPathPrefix}/dd03b.png`;
const imgProperty140Px = `${assetPathPrefix}/78c9f.png`;
const imgProperty132Px1 = `${assetPathPrefix}/37636.png`;
const imgProperty132Px2 = `${assetPathPrefix}/bc675.png`;
const imgProperty132Px3 = `${assetPathPrefix}/57de8.png`;
const imgProperty132Px4 = `${assetPathPrefix}/0d6f8.png`;
const imgProperty132Px5 = `${assetPathPrefix}/27d4b.png`;
const imgNotification = `${assetPathPrefix}/c6c0e.svg`;
const imgNote = `${assetPathPrefix}/3a1a9.svg`;
const imgTaskSquare = `${assetPathPrefix}/275c0.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/3df1b.svg`;
const imgSetting = `${assetPathPrefix}/7bba3.svg`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/749f8.svg`;
const imgSidebarLeft = `${assetPathPrefix}/6ebdb.svg`;
const imgCategory2 = `${assetPathPrefix}/5b16d.svg`;
const imgMessageText = `${assetPathPrefix}/5b286.svg`;
const imgArrowDown1 = `${assetPathPrefix}/71b71.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSearchNormal = `${assetPathPrefix}/11207.svg`;
const imgPlus = `${assetPathPrefix}/3dab3.svg`;
const imgFilter = `${assetPathPrefix}/5e44d.svg`;
const imgLine = `${assetPathPrefix}/18476.svg`;
const imgLine1 = `${assetPathPrefix}/39229.svg`;
const imgMessageNotif = `${assetPathPrefix}/04baa.svg`;
const imgArchive = `${assetPathPrefix}/e3287.svg`;
const imgVuesaxLinearBackSquare = `${assetPathPrefix}/46228.svg`;
const imgMore = `${assetPathPrefix}/d370e.svg`;
const imgAdd1 = `${assetPathPrefix}/391aa.svg`;
const imgVuesaxLinearAttachSquare = `${assetPathPrefix}/94644.svg`;
const imgEmojiHappy = `${assetPathPrefix}/8e4a4.svg`;
const imgGallery = `${assetPathPrefix}/2d5ab.svg`;
const imgMore1 = `${assetPathPrefix}/04859.svg`;

type AvatarMan1Props = {
  className?: string;
  property1?: "24px" | "32px";
};

function AvatarMan1({ className, property1 = "32px" }: AvatarMan1Props) {
  const is24Px = property1 === "24px";
  return (
    <div className={className || `relative ${is24Px ? "size-[24px]" : "size-[32px]"}`} id={is24Px ? "node-3_1844" : "node-3_1842"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is24Px ? "24" : "32"} src={is24Px ? imgProperty124Px : imgProperty132Px} width={is24Px ? "24" : "32"} />
    </div>
  );
}

type AvatarMan4Props = {
  className?: string;
  property1?: "32px" | "40px";
};

function AvatarMan4({ className, property1 = "40px" }: AvatarMan4Props) {
  const is32Px = property1 === "32px";
  return (
    <div className={className || `relative ${is32Px ? "size-[32px]" : "size-[40px]"}`} id={is32Px ? "node-3_1875" : "node-3_1873"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is32Px ? "32" : "40"} src={is32Px ? imgProperty132Px1 : imgProperty140Px} width={is32Px ? "32" : "40"} />
    </div>
  );
}

type AvatarMan3Props = {
  className?: string;
  property1?: "32px";
};

function AvatarMan3({ className, property1 = "32px" }: AvatarMan3Props) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="3:1864">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProperty132Px2} width="32" />
    </div>
  );
}

type AvatarWoman1Props = {
  className?: string;
  property1?: "32px";
};

function AvatarWoman1({ className, property1 = "32px" }: AvatarWoman1Props) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="3:1798">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProperty132Px3} width="32" />
    </div>
  );
}

type AvatarWoman3Props = {
  className?: string;
  property1?: "32px";
};

function AvatarWoman3({ className, property1 = "32px" }: AvatarWoman3Props) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="3:1820">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProperty132Px4} width="32" />
    </div>
  );
}

type AvatarMan2Props = {
  className?: string;
  property1?: "32px";
};

function AvatarMan2({ className, property1 = "32px" }: AvatarMan2Props) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="3:1853">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgProperty132Px5} width="32" />
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "Off";
  menu?: "Help & Center" | "Settings" | "Notifications" | "Notes" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "Off", menu = "Notifications" }: NavMenuProps) {
  const isHelpCenterAndFalseAndOff = menu === "Help & Center" && !active && darkmode === "Off";
  const isNotesAndFalseAndOff = menu === "Notes" && !active && darkmode === "Off";
  const isNotificationsAndFalseAndOff = menu === "Notifications" && !active && darkmode === "Off";
  const isSettingsAndFalseAndOff = menu === "Settings" && !active && darkmode === "Off";
  const isTasksAndFalseAndOff = menu === "Tasks" && !active && darkmode === "Off";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isSettingsAndFalseAndOff ? "node-6155_21335" : isHelpCenterAndFalseAndOff ? "node-6155_21332" : isTasksAndFalseAndOff ? "node-6155_21329" : isNotesAndFalseAndOff ? "node-6155_21326" : "node-6155_21320"}>
      {isNotificationsAndFalseAndOff && (
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
      {isNotesAndFalseAndOff && (
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
      {isTasksAndFalseAndOff && (
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
      {isHelpCenterAndFalseAndOff && (
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
      {isSettingsAndFalseAndOff && (
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

type LEmailsPageReplyEmailProps = {
  className?: string;
  responsive?: "No";
};

function LEmailsPageReplyEmail({ className, responsive = "No" }: LEmailsPageReplyEmailProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:51462">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-[900px] items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6067:27497" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6067:27497;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6067:27497;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6067:27497;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6067:27497;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6067:27497;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6067:27497;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6067:27497;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6067:27497;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6067:27497;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6067:27497;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6067:27497;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6067:27497;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6067:27497;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6067:27497;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6067:27497;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6067:27497;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6067:27497;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6067:27497;6155:48318;4009:131742" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:48318;4009:131742;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6067:27497;6155:48318;4009:131742;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27497;6155:48318;4009:131750">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6067:27497;6155:48319" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6067:27497;6155:48319;4106:14629" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:48319;4106:14629;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6067:27497;6155:48319;4106:14629;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27497;6155:48319;4106:14630">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6067:27497;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6067:27497;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6067:27497;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6067:27497;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6067:27497;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6067:27497;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6067:27497;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6067:27497;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6067:27497;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6067:27497;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6067:27497;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6067:27497;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27497;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6067:27497;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6067:27497;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6067:27497;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6067:27497;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27497;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6067:27497;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6067:27497;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6067:27497;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6067:27497;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6067:27497;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27497;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6067:27497;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6067:27497;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6067:27497;6155:47561" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6067:27498" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6067:27499" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6067:27500">
            <p className="leading-[1.5]">Emails</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="6067:27501" data-name="Buttons">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6067:27502" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6067:27503" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="6067:27504" data-name="search-normal">
                  <div className="absolute contents inset-0" data-node-id="I6067:27504;3:21503" data-name="vuesax/linear/search-normal">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6067:27504;3:21504" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6067:27505">
                  Search Email
                </p>
              </div>
              <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[137px]" data-node-id="6067:27506" data-name="Button">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                <div className="relative shrink-0 size-[16px]" data-node-id="I6067:27506;6155:20976" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6067:27506;6155:20977">
                  New Messages
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-node-id="6067:27507" data-name="Main Content">
          <div className="border-[#f1f1f5] border-r border-solid content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[436px]" data-node-id="6067:27508" data-name="List Mails">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6067:27509" data-name="Headline">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="6067:27510">
                Manage Emails Easily ✉️
              </p>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[83px]" data-node-id="6067:27511" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6067:27511;4006:547" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilter} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6067:27511;4006:548">
                  Filter
                </p>
              </div>
            </div>
            <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex h-[46px] items-center overflow-clip px-[24px] relative shrink-0 w-full" data-node-id="6067:27512" data-name="Tabbing">
              <div className="border-[#4d41f3] border-b-3 border-solid content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6067:27512;6055:26126" data-name="Tabbing 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41f3] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27512;6055:26091">
                  <p className="leading-[1.5]">All Mails</p>
                </div>
              </div>
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6067:27512;6055:26127" data-name="Tabbing 2">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27512;6055:26128">
                  <p className="leading-[1.5]">Unread</p>
                </div>
              </div>
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6067:27512;6055:26129" data-name="Tabbing 3">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27512;6055:26130">
                  <p className="leading-[1.5]">Archive</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full" data-node-id="6067:27513" data-name="Mail List">
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27514" data-name="Mail">
                <AvatarMan4 className="relative shrink-0 size-[32px]" property1="32px" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27516" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27517" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27518">
                      John Carter
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27519">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27520">
                    RE: Proposal Request
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27521">
                    Hi team, Thanks again for taking the time to join the product demo earlier this week — it was a pleasure learning more about GreenTech’s goals and how your team operates.forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6067:27522" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27523" data-name="Mail">
                <AvatarWoman1 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27525" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27526" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27527">
                      Emily Davis
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27528">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27529">
                    Great Demo — What’s Next?
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27530">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6067:27531" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27532" data-name="Mail">
                <AvatarMan3 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27534" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27535" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27536">
                      noreply@technova.com
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27537">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27538">
                    Proposal Sent Confirmation
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27539">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6067:27540" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27541" data-name="Mail">
                <AvatarMan2 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27543" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27544" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27545">
                      Alex Spencer
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27546">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27547">
                    Questions About Your CRM Plans
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27548">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6067:27549" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27550" data-name="Mail">
                <AvatarWoman3 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27552" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27553" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27554">
                      Sarah Thompson
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27555">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27556">
                    Campaign Launch Update
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27557">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6067:27558" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27559" data-name="Mail">
                <AvatarWoman1 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27561" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27562" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27563">
                      Emily Davis
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27564">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27565">
                    Great Demo — What’s Next?
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27566">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6067:27567" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6067:27568" data-name="Mail">
                <AvatarMan3 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6067:27570" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] w-full whitespace-nowrap" data-node-id="6067:27571" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6067:27572">
                      noreply@technova.com
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6067:27573">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27574">
                    Proposal Sent Confirmation
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6067:27575">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-node-id="6067:27576" data-name="Main Chat">
            <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[18px] relative shrink-0 w-full" data-node-id="6067:27577" data-name="Headline">
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="6067:27578" data-name="avatar">
                <AvatarMan4 className="relative shrink-0 size-[40px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-node-id="6067:27580" data-name="Text">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6067:27581" data-name="Name">
                    <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px]" data-node-id="6067:27582">
                      John Carter
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6067:27583">
                      johncarter@mail.com
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center leading-[normal] relative shrink-0 text-[12px]" data-node-id="6067:27584" data-name="Received">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b5a64] tracking-[-0.12px]" data-node-id="6067:27585">
                      Received
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] tracking-[-0.24px]" data-node-id="6067:27586">
                      John Cornor
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6067:27587" data-name="Action">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6067:27588">
                  10 Dec 2024
                </p>
                <div className="h-[22px] relative shrink-0 w-0" data-node-id="6067:27589" data-name="Line">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgLine1} />
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6067:27590" data-name="message-notif">
                  <div className="absolute contents inset-0" data-node-id="I6067:27590;3:14534" data-name="vuesax/linear/message-notif">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6067:27590;3:14535" data-name="message-notif">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageNotif} />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6067:27591" data-name="archive">
                  <div className="absolute contents inset-0" data-node-id="I6067:27591;3:30675" data-name="vuesax/linear/archive">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6067:27591;3:30676" data-name="archive">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArchive} />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6067:27592" data-name="back-square">
                  <div className="absolute contents inset-0" data-node-id="I6067:27592;3:10335" data-name="vuesax/linear/back-square">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearBackSquare} />
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6126:20580">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6126:20580;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:20580;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px not-italic p-[24px] relative w-full" data-node-id="6067:27594" data-name="Content">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[18px] tracking-[-0.36px] w-full" data-node-id="6067:27595">
                RE: Proposal Request
              </p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27596">
                Hi Alex,
              </p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27597">
                Thanks again for taking the time to join the product demo earlier this week — it was a pleasure learning more about GreenTech’s goals and how your team operates.
              </p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="6067:27598">{`As promised, I’ve outlined a summary of what we discussed, along with some tailored suggestions on how crm  can support your workflow and growth:`}</p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27599">
                🌟 Key Benefits for GreenTech:
              </p>
              <ul className="block font-['Inter:Medium'] font-medium leading-[0] list-disc relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27600">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Custom Pipelines: Easily track partnerships, government contracts, and inbound leads in separate stages.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Team Collaboration: Your Sales and Marketing teams can work seamlessly with shared notes, task assignments, and progress tracking.</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Smart Follow-Ups: Automate reminders based on inactivity or lead status, ensuring no opportunity slips through.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">{`Integrated Communication: Email, calls, and meetings all in one place — fully synced with your existing tools (Google Workspace & Slack).`}</span>
                </li>
              </ul>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27601">
                📊 Recommended Plan: PRO+
              </p>
              <div className="font-['Inter:Medium'] font-medium leading-[0] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27602">
                <ul className="list-disc mb-0">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">15 users</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">10 automated workflows</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">Priority support</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[1.5]">Custom onboarding session</span>
                  </li>
                </ul>
                <p className="leading-[1.5] mb-0 whitespace-pre-wrap">​</p>
                <p className="leading-[1.5] whitespace-pre-wrap">$149/month, billed annually.</p>
              </div>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27603">
                — Alex Spencer
              </p>
            </div>
            <div className="border-[#f1f1f5] border-solid border-t content-stretch flex items-end justify-between p-[24px] relative shrink-0 w-full" data-node-id="6067:27604" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6067:27605" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27605;4006:532">
                  Add Note
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="6067:27606" data-name="Buttons">
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6067:27607" data-name="Button">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27607;4006:532">
                    Forward
                  </p>
                </div>
                <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6067:27608" data-name="Button">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27608;4006:528">
                    Reply
                  </p>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e5e5ec] border-solid content-stretch drop-shadow-[0px_17.119px_10.271px_rgba(16,24,40,0.03),0px_9.85px_8.425px_rgba(16,24,40,0.03)] flex flex-col items-start left-[20px] p-[4px] rounded-[21px] top-[433px] w-[704px]" data-node-id="6067:27971" data-name="Reply">
              <div className="content-stretch flex flex-col gap-[21px] h-[382px] items-center overflow-clip p-[18px] relative rounded-[18px] shadow-[0px_17.119px_20.542px_-3.424px_rgba(16,24,40,0.03),0px_9.85px_16.85px_-8.42px_rgba(16,24,40,0.16)] shrink-0 w-full" data-node-id="6067:27972" style={{ backgroundImage: "linear-gradient(180deg, rgba(242, 242, 242, 0.67) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Main">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="6067:27973" data-name="Head">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[6px] items-center leading-[normal] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="6067:27975" data-name="Received">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b5a64] tracking-[-0.12px]" data-node-id="6067:27976">
                      to
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] tracking-[-0.24px]" data-node-id="6067:27977">
                      John Carter
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="6067:27978" data-name="close">
                    <div className="absolute contents inset-0" data-node-id="I6067:27978;3:30203" data-name="vuesax/linear/add">
                      <div className="absolute inset-[0_-35%_-35%_0]" data-node-id="I6067:27978;3:30204" data-name="add">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium gap-[18px] items-start min-h-px not-italic relative text-[#020408] text-[14px] tracking-[-0.28px] w-full" data-node-id="6067:27979" data-name="Main">
                  <div className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap" data-node-id="6067:27980">
                    <p className="leading-[1.5] mb-0">Hi John Carter,</p>
                    <p className="leading-[1.5] mb-0">​</p>
                    <p className="leading-[1.5]">{`Thank you for the detailed follow-up and for walking us through the demo earlier this week — it really helped clarify how CRM could align with our internal processes. I reviewed the attached proposal and the PRO+ plan looks like a great fit, especially the automated workflows and team collaboration features. `}</p>
                  </div>
                  <p className="leading-[1.5] relative shrink-0 w-full" data-node-id="6067:27981">
                    A few questions before we move forward:
                  </p>
                  <div className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap" data-node-id="6067:27982">
                    <p className="leading-[1.5] mb-0">{`	1.	Can we customize the onboarding session to include our marketing automation setup?`}</p>
                    <p className="leading-[1.5] mb-0">{`	2.	Is there flexibility to upgrade user seats later if we scale faster than expected?`}</p>
                    <p className="leading-[1.5]">{`	3.	How does data migration from our current CRM work — is that included?`}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="6067:27983" data-name="Buttons">
                  <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6067:27984" data-name="Button">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6067:27984;6155:20937">
                      Send Now
                    </p>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
                  </div>
                  <div className="relative shrink-0 size-[18px]" data-node-id="6067:27985" data-name="attach-square">
                    <div className="absolute contents inset-0" data-node-id="I6067:27985;3:8353" data-name="vuesax/linear/attach-square">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearAttachSquare} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[18px]" data-node-id="6067:27986" data-name="emoji-happy">
                    <div className="absolute contents inset-0" data-node-id="I6067:27986;3:30378" data-name="vuesax/linear/emoji-happy">
                      <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6067:27986;3:30379" data-name="emoji-happy">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEmojiHappy} />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[18px]" data-node-id="6067:27987" data-name="gallery">
                    <div className="absolute contents inset-0" data-node-id="I6067:27987;3:43390" data-name="vuesax/linear/gallery">
                      <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6067:27987;3:43391" data-name="gallery">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGallery} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6174:53687">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6174:53687;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6174:53687;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
