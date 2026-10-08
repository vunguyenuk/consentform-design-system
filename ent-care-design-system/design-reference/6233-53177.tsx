const assetPathPrefix = "https://www.figma.com/api/mcp/asset/a3320cf1-00ee-4ad5-ad54-7383e4c1341a";
const imgProperty132Px = `${assetPathPrefix}/0d6f8.png`;
const imgProperty124Px = `${assetPathPrefix}/6d9b2.png`;
const imgProperty124Px1 = `${assetPathPrefix}/1b4db.png`;
const imgProperty132Px1 = `${assetPathPrefix}/bc675.png`;
const imgProperty124Px2 = `${assetPathPrefix}/a337c.png`;
const imgProperty132Px2 = `${assetPathPrefix}/75dac.png`;
const imgProperty124Px3 = `${assetPathPrefix}/dd03b.png`;
const imgProperty140Px = `${assetPathPrefix}/78c9f.png`;
const imgProperty132Px3 = `${assetPathPrefix}/37636.png`;
const imgProperty132Px4 = `${assetPathPrefix}/57de8.png`;
const imgProperty132Px5 = `${assetPathPrefix}/27d4b.png`;
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification = `${assetPathPrefix}/a31fd.svg`;
const imgNote = `${assetPathPrefix}/46e76.svg`;
const imgTaskSquare = `${assetPathPrefix}/85b6d.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/7a272.svg`;
const imgSetting = `${assetPathPrefix}/ca8b3.svg`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/71b71.svg`;
const imgSidebarLeft = `${assetPathPrefix}/9f2cf.svg`;
const imgMessageText = `${assetPathPrefix}/76ce9.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSearchNormal = `${assetPathPrefix}/939e0.svg`;
const imgPlus = `${assetPathPrefix}/3dab3.svg`;
const imgLine = `${assetPathPrefix}/7034f.svg`;
const imgLine1 = `${assetPathPrefix}/651c2.svg`;
const imgMessageNotif = `${assetPathPrefix}/2cf73.svg`;
const imgArchive = `${assetPathPrefix}/bd625.svg`;
const imgVuesaxLinearBackSquare = `${assetPathPrefix}/1211d.svg`;
const imgMore = `${assetPathPrefix}/95bac.svg`;
const imgClose = `${assetPathPrefix}/a9704.svg`;
const imgArrowDown1 = `${assetPathPrefix}/d5611.svg`;
const imgLine2 = `${assetPathPrefix}/7157a.svg`;
const imgVuesaxLinearAttachSquare = `${assetPathPrefix}/36148.svg`;
const imgEmojiHappy = `${assetPathPrefix}/7e067.svg`;
const imgGallery = `${assetPathPrefix}/21e0c.svg`;
const imgMore1 = `${assetPathPrefix}/75c72.svg`;

type AvatarWoman3Props = {
  className?: string;
  property1?: "24px" | "32px";
};

function AvatarWoman3({ className, property1 = "32px" }: AvatarWoman3Props) {
  const is24Px = property1 === "24px";
  return (
    <div className={className || `relative ${is24Px ? "size-[24px]" : "size-[32px]"}`} id={is24Px ? "node-3_1822" : "node-3_1820"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is24Px ? "24" : "32"} src={is24Px ? imgProperty124Px : imgProperty132Px} width={is24Px ? "24" : "32"} />
    </div>
  );
}

type AvatarWoman4Props = {
  className?: string;
  property1?: "24px";
};

function AvatarWoman4({ className, property1 = "24px" }: AvatarWoman4Props) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="3:1833">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgProperty124Px1} width="24" />
    </div>
  );
}

type AvatarMan3Props = {
  className?: string;
  property1?: "24px" | "32px";
};

function AvatarMan3({ className, property1 = "32px" }: AvatarMan3Props) {
  const is24Px = property1 === "24px";
  return (
    <div className={className || `relative ${is24Px ? "size-[24px]" : "size-[32px]"}`} id={is24Px ? "node-3_1866" : "node-3_1864"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is24Px ? "24" : "32"} src={is24Px ? imgProperty124Px2 : imgProperty132Px1} width={is24Px ? "24" : "32"} />
    </div>
  );
}

type AvatarMan1Props = {
  className?: string;
  property1?: "24px" | "32px";
};

function AvatarMan1({ className, property1 = "32px" }: AvatarMan1Props) {
  const is24Px = property1 === "24px";
  return (
    <div className={className || `relative ${is24Px ? "size-[24px]" : "size-[32px]"}`} id={is24Px ? "node-3_1844" : "node-3_1842"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is24Px ? "24" : "32"} src={is24Px ? imgProperty124Px3 : imgProperty132Px2} width={is24Px ? "24" : "32"} />
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
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is32Px ? "32" : "40"} src={is32Px ? imgProperty132Px3 : imgProperty140Px} width={is32Px ? "32" : "40"} />
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
  darkmode?: "On";
  menu?: "Dashboard" | "Help & Center" | "Settings" | "Notifications" | "Notes" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "On", menu = "Dashboard" }: NavMenuProps) {
  const isDashboardAndFalseAndOn = menu === "Dashboard" && !active && darkmode === "On";
  const isHelpCenterAndFalseAndOn = menu === "Help & Center" && !active && darkmode === "On";
  const isNotesAndFalseAndOn = menu === "Notes" && !active && darkmode === "On";
  const isNotificationsAndFalseAndOn = menu === "Notifications" && !active && darkmode === "On";
  const isSettingsAndFalseAndOn = menu === "Settings" && !active && darkmode === "On";
  const isTasksAndFalseAndOn = menu === "Tasks" && !active && darkmode === "On";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isSettingsAndFalseAndOn ? "node-6155_47840" : isHelpCenterAndFalseAndOn ? "node-6155_47837" : isTasksAndFalseAndOn ? "node-6155_47834" : isNotesAndFalseAndOn ? "node-6155_47831" : isNotificationsAndFalseAndOn ? "node-6155_47825" : "node-6155_47822"}>
      {isDashboardAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47823" data-name="category-2">
            <div className="absolute contents inset-0" data-node-id="I6155:47823;3:33781" data-name="vuesax/linear/category-2">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47823;3:33782" data-name="category-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47824">
            <p className="leading-[1.5]">Dashboard</p>
          </div>
        </>
      )}
      {isNotificationsAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47826" data-name="notification">
            <div className="absolute contents inset-0" data-node-id="I6155:47826;3:36017" data-name="vuesax/linear/notification">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47826;3:36018" data-name="notification">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47827">
            <p className="leading-[1.5]">Notifications</p>
          </div>
        </>
      )}
      {isNotesAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47832" data-name="note">
            <div className="absolute contents inset-0" data-node-id="I6155:47832;3:42197" data-name="vuesax/linear/note">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47832;3:42198" data-name="note">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNote} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47833">
            <p className="leading-[1.5]">Notes</p>
          </div>
        </>
      )}
      {isTasksAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47835" data-name="task-square">
            <div className="absolute contents inset-0" data-node-id="I6155:47835;3:36664" data-name="vuesax/linear/task-square">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47835;3:36665" data-name="task-square">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47836">
            <p className="leading-[1.5]">Tasks</p>
          </div>
        </>
      )}
      {isHelpCenterAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47838" data-name="message-question">
            <div className="absolute contents inset-0" data-node-id="I6155:47838;3:27563" data-name="vuesax/linear/message-question">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47839">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
        </>
      )}
      {isSettingsAndFalseAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47841" data-name="setting">
            <div className="absolute contents inset-0" data-node-id="I6155:47841;3:33830" data-name="vuesax/linear/setting">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47841;3:33831" data-name="setting">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47842">
            <p className="leading-[1.5]">Settings</p>
          </div>
        </>
      )}
    </div>
  );
}

type DEmailsPageNewEmailProps = {
  className?: string;
  responsive?: "No";
};

function DEmailsPageNewEmail({ className, responsive = "No" }: DEmailsPageNewEmailProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:53177">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6176:53729" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6176:53729;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6176:53729;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6176:53729;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6176:53729;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6176:53729;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6176:53729;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6176:53729;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6176:53729;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6176:53729;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:53729;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6176:53729;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6176:53729;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6176:53729;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6176:53729;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6176:53729;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6176:53729;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6176:53729;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:53729;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6176:53729;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6176:53729;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6176:53729;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:53729;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:53729;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:53729;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:53729;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53729;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:53729;6155:48426" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:53729;6155:48426;6155:47850" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48426;6155:47850;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:53729;6155:48426;6155:47850;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53729;6155:48426;6155:47851">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6176:53729;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6176:53729;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6176:53729;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:53729;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6176:53729;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6176:53729;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6176:53729;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:53729;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:53729;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6176:53729;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6176:53729;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6176:53729;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53729;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:53729;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6176:53729;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6176:53729;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6176:53729;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53729;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6176:53729;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6176:53729;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6176:53729;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6176:53729;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6176:53729;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53729;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:53729;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6176:53729;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6176:53729;6155:48449" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6176:53730" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6176:53731" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6176:53732">
            <p className="leading-[1.5]">Emails</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6176:53733" data-name="Buttons">
            <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6176:53734" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="6176:53735" data-name="search-normal">
                <div className="absolute contents inset-0" data-node-id="I6176:53735;3:21503" data-name="vuesax/linear/search-normal">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:53735;3:21504" data-name="search-normal">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6176:53736">
                Search Email
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[137px]" data-node-id="6176:53737" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6176:53737;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6176:53737;6155:20977">
                New Messages
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="bg-[#161618] content-stretch flex h-[842px] items-start overflow-clip relative shrink-0 w-full" data-node-id="6176:53738" data-name="Main Content">
          <div className="border-[#252528] border-r border-solid content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[436px]" data-node-id="6176:53739" data-name="List Mails">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6176:53740" data-name="Headline">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap" data-node-id="6176:53741">
                Manage Emails ✉️
              </p>
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[83px]" data-node-id="6176:53742" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:53742;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6176:53742;6155:21045">
                  Filter
                </p>
              </div>
            </div>
            <div className="border-[#44444a] border-b border-solid content-stretch flex h-[46px] items-center overflow-clip px-[24px] relative shrink-0 w-full" data-node-id="6176:53743" data-name="Tabbing">
              <div className="border-[#796ff7] border-b-3 border-solid content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6176:53743;6155:20856" data-name="Tabbing 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#796ff7] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53743;6155:20857">
                  <p className="leading-[1.5]">All Mails</p>
                </div>
              </div>
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6176:53743;6155:20858" data-name="Tabbing 2">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53743;6155:20859">
                  <p className="leading-[1.5]">Unread</p>
                </div>
              </div>
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6176:53743;6155:20860" data-name="Tabbing 3">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53743;6155:20861">
                  <p className="leading-[1.5]">Archive</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-full" data-node-id="6176:53744" data-name="Mail List">
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53745" data-name="Mail">
                <AvatarMan4 className="relative shrink-0 size-[32px]" property1="32px" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53747" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53748" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53749">
                      John Carter
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53750">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53751">
                    RE: Proposal Request
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53752">
                    Hi team, Thanks again for taking the time to join the product demo earlier this week — it was a pleasure learning more about GreenTech’s goals and how your team operates.forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:53753" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53754" data-name="Mail">
                <AvatarWoman1 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53756" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53757" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53758">
                      Emily Davis
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53759">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53760">
                    Great Demo — What’s Next?
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53761">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:53762" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53763" data-name="Mail">
                <AvatarMan3 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53765" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53766" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53767">
                      noreply@technova.com
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53768">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53769">
                    Proposal Sent Confirmation
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53770">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:53771" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53772" data-name="Mail">
                <AvatarMan2 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53774" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53775" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53776">
                      Alex Spencer
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53777">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53778">
                    Questions About Your CRM Plans
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53779">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:53780" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53781" data-name="Mail">
                <AvatarWoman3 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53783" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53784" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53785">
                      Sarah Thompson
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53786">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53787">
                    Campaign Launch Update
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53788">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:53789" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53790" data-name="Mail">
                <AvatarWoman1 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53792" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53793" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53794">
                      Emily Davis
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53795">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53796">
                    Great Demo — What’s Next?
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53797">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:53798" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-node-id="6176:53799" data-name="Mail">
                <AvatarMan3 className="relative shrink-0 size-[32px]" />
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-node-id="6176:53801" data-name="Text">
                  <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-node-id="6176:53802" data-name="Head">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 tracking-[-0.24px]" data-node-id="6176:53803">
                      noreply@technova.com
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 tracking-[-0.12px]" data-node-id="6176:53804">
                      9.00 am
                    </p>
                  </div>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53805">
                    Proposal Sent Confirmation
                  </p>
                  <p className="font-['Inter:Medium'] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white tracking-[-0.28px] w-full whitespace-nowrap" data-node-id="6176:53806">
                    Hi team, thanks again for the product demo. I had a few questions regarding the Starter and Pro plans, especially around the number of users and included automations. Let me know when we can hop on a call to go over everything. Looking forward to moving forward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-node-id="6176:53807" data-name="Main Chat">
            <div className="border-[#252528] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[18px] relative shrink-0 w-full" data-node-id="6176:53808" data-name="Headline">
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-node-id="6176:53809" data-name="avatar">
                <AvatarMan4 className="relative shrink-0 size-[40px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-node-id="6176:53811" data-name="Text">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6176:53812" data-name="Name">
                    <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.28px]" data-node-id="6176:53813">
                      John Carter
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6176:53814">
                      johncarter@mail.com
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center leading-[normal] relative shrink-0 text-[12px]" data-node-id="6176:53815" data-name="Received">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b5a64] tracking-[-0.12px]" data-node-id="6176:53816">
                      Received
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-white tracking-[-0.24px]" data-node-id="6176:53817">
                      John Cornor
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6176:53818" data-name="Action">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6176:53819">
                  10 Dec 2024
                </p>
                <div className="h-[22px] relative shrink-0 w-0" data-node-id="6176:53820" data-name="Line">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgLine1} />
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6176:53821" data-name="message-notif">
                  <div className="absolute contents inset-0" data-node-id="I6176:53821;3:14534" data-name="vuesax/linear/message-notif">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:53821;3:14535" data-name="message-notif">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageNotif} />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6176:53822" data-name="archive">
                  <div className="absolute contents inset-0" data-node-id="I6176:53822;3:30675" data-name="vuesax/linear/archive">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:53822;3:30676" data-name="archive">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArchive} />
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6176:53823" data-name="back-square">
                  <div className="absolute contents inset-0" data-node-id="I6176:53823;3:10335" data-name="vuesax/linear/back-square">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearBackSquare} />
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6176:53824">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6176:53824;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6176:53824;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px not-italic p-[24px] relative w-full" data-node-id="6176:53825" data-name="Content">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" data-node-id="6176:53826">
                RE: Proposal Request
              </p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53827">
                Hi Alex,
              </p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53828">
                Thanks again for taking the time to join the product demo earlier this week — it was a pleasure learning more about GreenTech’s goals and how your team operates.
              </p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="6176:53829">{`As promised, I’ve outlined a summary of what we discussed, along with some tailored suggestions on how crm  can support your workflow and growth:`}</p>
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53830">
                🌟 Key Benefits for GreenTech:
              </p>
              <ul className="block font-['Inter:Medium'] font-medium leading-[0] list-disc relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53831">
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
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53832">
                📊 Recommended Plan: PRO+
              </p>
              <div className="font-['Inter:Medium'] font-medium leading-[0] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53833">
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
              <p className="font-['Inter:Medium'] font-medium leading-[1.5] relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] w-full" data-node-id="6176:53834">
                — Alex Spencer
              </p>
            </div>
            <div className="border-[#44444a] border-solid border-t content-stretch flex items-end justify-between p-[24px] relative shrink-0 w-full" data-node-id="6176:53835" data-name="Buttons">
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6176:53836" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53836;6155:21005">
                  Add Note
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="6176:53837" data-name="Buttons">
                <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6176:53838" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53838;6155:21005">
                    Forward
                  </p>
                </div>
                <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6176:53839" data-name="Button">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:53839;6155:20997">
                    Reply
                  </p>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col h-[900px] items-center justify-center left-0 overflow-clip p-[10px] top-0 w-[1440px]" data-node-id="6176:54058" data-name="Popup">
        <div className="bg-[#252528] content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-[804px]" data-node-id="6176:54059" data-name="Modal">
          <div className="border-[#44444a] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6176:54060" data-name="Head">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-px not-italic relative text-[18px] text-white tracking-[-0.36px]" data-node-id="6176:54061">
              New Messages
            </p>
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6176:54255" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6176:54255;6155:21004" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClose} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6176:54064" data-name="Main">
            <div className="border-[#44444a] border-r border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px px-[24px] py-[16px] relative self-stretch" data-node-id="6176:54065" data-name="Main Text">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="6176:54066" data-name="From">
                <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="6176:54067" data-name="Received">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] w-[50px]" data-node-id="6176:54068">
                    From
                  </p>
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6176:54070">
                    John Cornor
                  </p>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6176:54071" data-name="arrow-down">
                  <div className="absolute contents inset-0" data-node-id="I6176:54071;3:11318" data-name="vuesax/linear/arrow-down">
                    <div className="absolute inset-[0_-35%_-35%_0]" data-node-id="I6176:54071;3:11319" data-name="arrow-down">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:54072" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine2} />
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="6176:54073" data-name="To">
                <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="6176:54074" data-name="Received">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] w-[50px]" data-node-id="6176:54075">
                    to
                  </p>
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="6176:54076">
                    <AvatarMan3 className="mr-[-5px] relative shrink-0 size-[24px]" property1="24px" />
                    <AvatarWoman4 className="mr-[-5px] relative shrink-0 size-[24px]" />
                    <AvatarWoman3 className="relative shrink-0 size-[24px]" property1="24px" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6176:54080">
                    Sending emails to 3 recipents
                  </p>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="6176:54081" data-name="arrow-down">
                  <div className="absolute contents inset-0" data-node-id="I6176:54081;3:11318" data-name="vuesax/linear/arrow-down">
                    <div className="absolute inset-[0_-35%_-35%_0]" data-node-id="I6176:54081;3:11319" data-name="arrow-down">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:54082" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine2} />
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="6176:54083" data-name="Head">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6176:54084">
                  RE: Proposal Request
                </p>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6176:54085" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine2} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[18px] items-start not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] w-full" data-node-id="6176:54086" data-name="Text">
                <div className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap" data-node-id="6176:54087">
                  <p className="leading-[1.5] mb-0">Hi John Carter,</p>
                  <p className="leading-[1.5] mb-0">​</p>
                  <p className="leading-[1.5]">{`Thank you for the detailed follow-up and for walking us through the demo earlier this week — it really helped clarify how CRM could align with our internal processes. I reviewed the attached proposal and the PRO+ plan looks like a great fit, especially the automated workflows and team collaboration features. `}</p>
                </div>
                <p className="leading-[1.5] relative shrink-0 w-full" data-node-id="6176:54088">
                  A few questions before we move forward:
                </p>
                <div className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap" data-node-id="6176:54089">
                  <p className="leading-[1.5] mb-0">{`	1.	Can we customize the onboarding session to include our marketing automation setup?`}</p>
                  <p className="leading-[1.5] mb-0">{`	2.	Is there flexibility to upgrade user seats later if we scale faster than expected?`}</p>
                  <p className="leading-[1.5]">{`	3.	How does data migration from our current CRM work — is that included?`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative shrink-0 w-[256px]" data-node-id="6176:54090" data-name="Add recipents">
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-full" data-node-id="6176:54266" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6176:54266;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6176:54266;6155:21045">
                  Add recipents
                </p>
              </div>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6176:54094" data-name="Received">
                <AvatarMan3 className="relative shrink-0 size-[24px]" property1="24px" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="6176:54096">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-white tracking-[-0.24px]" data-node-id="6176:54097">
                    Alexandro Brown
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#bebec8] tracking-[-0.12px]" data-node-id="6176:54098">
                    Albrown@cliently.com
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6176:54099" data-name="Received">
                <AvatarWoman4 className="relative shrink-0 size-[24px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="6176:54101">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-white tracking-[-0.24px]" data-node-id="6176:54102">
                    Lily Alexa
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#bebec8] tracking-[-0.12px]" data-node-id="6176:54103">
                    lilybrown@cliently.com
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6176:54104" data-name="Received">
                <AvatarWoman3 className="relative shrink-0 size-[24px]" property1="24px" />
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="6176:54106">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-white tracking-[-0.24px]" data-node-id="6176:54107">
                    Jenifer Laurence
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#bebec8] tracking-[-0.12px]" data-node-id="6176:54108">
                    Jenferlau@cliently.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[#44444a] border-solid border-t content-stretch flex gap-[12px] items-center justify-end p-[24px] relative shrink-0 w-full" data-node-id="6176:54109" data-name="Buttons">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6176:54110" data-name="More">
              <div className="relative shrink-0 size-[18px]" data-node-id="6176:54285" data-name="attach-square">
                <div className="absolute contents inset-0" data-node-id="I6176:54285;3:8353" data-name="vuesax/linear/attach-square">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearAttachSquare} />
                </div>
              </div>
              <div className="relative shrink-0 size-[18px]" data-node-id="6176:54286" data-name="emoji-happy">
                <div className="absolute contents inset-0" data-node-id="I6176:54286;3:30378" data-name="vuesax/linear/emoji-happy">
                  <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6176:54286;3:30379" data-name="emoji-happy">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEmojiHappy} />
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[18px]" data-node-id="6176:54287" data-name="gallery">
                <div className="absolute contents inset-0" data-node-id="I6176:54287;3:43390" data-name="vuesax/linear/gallery">
                  <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6176:54287;3:43391" data-name="gallery">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGallery} />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center leading-[0] relative shrink-0 size-[16px]" data-node-id="6176:54288">
                <div className="-rotate-90 flex-none">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="vuesax/linear/more">
                    <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-node-id="6176:54289" data-name="more">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6176:54115" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54115;6155:21005">
                Cancel
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6176:54116" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6176:54116;6155:20997">
                Send Now
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
