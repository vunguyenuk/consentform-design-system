const assetPathPrefix = "https://www.figma.com/api/mcp/asset/01f35d2a-7c69-4672-b4a9-c6328a862679";
const imgMinus = `${assetPathPrefix}/e452c.svg`;
const imgProfile = `${assetPathPrefix}/a9fe9.svg`;
const imgCategory = `${assetPathPrefix}/2c8ea.svg`;
const imgNotification = `${assetPathPrefix}/c6c0e.svg`;
const imgMessageText = `${assetPathPrefix}/7fdbf.svg`;
const imgNote = `${assetPathPrefix}/3a1a9.svg`;
const imgTaskSquare = `${assetPathPrefix}/275c0.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/3df1b.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/749f8.svg`;
const imgSidebarLeft = `${assetPathPrefix}/6ebdb.svg`;
const imgCategory2 = `${assetPathPrefix}/5b16d.svg`;
const imgArrowDown1 = `${assetPathPrefix}/71b71.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSetting = `${assetPathPrefix}/cf1ab.svg`;
const imgVuesaxLinearCalendar = `${assetPathPrefix}/14e5d.svg`;
const imgStrongbox = `${assetPathPrefix}/2f18c.svg`;
const imgVuesaxLinearPeople = `${assetPathPrefix}/9f2f2.svg`;
const imgNotification1 = `${assetPathPrefix}/3e198.svg`;
const imgBriefcase = `${assetPathPrefix}/6137f.svg`;
const imgProfile2User = `${assetPathPrefix}/affad.svg`;
const imgWalletMinus = `${assetPathPrefix}/d114b.svg`;
const imgLine = `${assetPathPrefix}/4d540.svg`;
const imgInfoCircle = `${assetPathPrefix}/d2677.svg`;
const imgAddSquare = `${assetPathPrefix}/5e44d.svg`;
const imgLine1 = `${assetPathPrefix}/66bcf.svg`;
const imgTickCircle = `${assetPathPrefix}/ca884.svg`;
const imgLine2 = `${assetPathPrefix}/78570.svg`;
const imgMore = `${assetPathPrefix}/04859.svg`;

type ToggleProps = {
  className?: string;
  darkmode?: "Off";
  enable?: "No";
};

function Toggle({ className, darkmode = "Off", enable = "No" }: ToggleProps) {
  return (
    <div className={className || "bg-[#e5e5ec] content-stretch flex items-start pl-[2px] pr-[18px] py-[2px] relative rounded-[100px]"} data-node-id="6155:21191">
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[14px]" data-node-id="6155:21192" data-name="switch">
        <div className="relative shrink-0 size-[16px]" data-node-id="6155:21193" data-name="minus">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
        </div>
      </div>
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  menu?: "Profile" | "Integration";
};

function NavMenu({ className, active = false, menu = "Profile" }: NavMenuProps) {
  const isIntegrationAndFalse = menu === "Integration" && !active;
  const isProfileAndFalse = menu === "Profile" && !active;
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isIntegrationAndFalse ? "node-6086_21958" : "node-6086_19110"}>
      {isProfileAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:19111" data-name="profile">
            <div className="absolute contents inset-0" data-node-id="I6086:19111;3:13259" data-name="vuesax/linear/profile">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6086:19111;3:13260" data-name="profile">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:19112">
            <p className="leading-[1.5]">Profile</p>
          </div>
        </>
      )}
      {isIntegrationAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:21959" data-name="category">
            <div className="absolute contents inset-0" data-node-id="I6086:21959;3:33732" data-name="vuesax/linear/category">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6086:21959;3:33733" data-name="category">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:21960">
            <p className="leading-[1.5]">Integration</p>
          </div>
        </>
      )}
    </div>
  );
}

type NavMenu1Props = {
  className?: string;
  active?: boolean;
  darkmode?: "Off";
  menu?: "Help & Center" | "Notifications" | "Emails" | "Notes" | "Tasks";
};

function NavMenu1({ className, active = false, darkmode = "Off", menu = "Notifications" }: NavMenu1Props) {
  const isEmailsAndFalseAndOff = menu === "Emails" && !active && darkmode === "Off";
  const isHelpCenterAndFalseAndOff = menu === "Help & Center" && !active && darkmode === "Off";
  const isNotesAndFalseAndOff = menu === "Notes" && !active && darkmode === "Off";
  const isNotificationsAndFalseAndOff = menu === "Notifications" && !active && darkmode === "Off";
  const isTasksAndFalseAndOff = menu === "Tasks" && !active && darkmode === "Off";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isHelpCenterAndFalseAndOff ? "node-6155_21332" : isTasksAndFalseAndOff ? "node-6155_21329" : isNotesAndFalseAndOff ? "node-6155_21326" : isEmailsAndFalseAndOff ? "node-6155_21323" : "node-6155_21320"}>
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
      {isEmailsAndFalseAndOff && (
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

type LSettingsPlansProps = {
  className?: string;
  responsive?: "No";
};

function LSettingsPlans({ className, responsive = "No" }: LSettingsPlansProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:52246">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6098:34209" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6098:34209;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6098:34209;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6098:34209;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6098:34209;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6098:34209;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6098:34209;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6098:34209;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6098:34209;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6098:34209;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6098:34209;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6098:34209;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6098:34209;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6098:34209;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6098:34209;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6098:34209;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6098:34209;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34209;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34209;6155:48318;4009:131742" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:48318;4009:131742;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34209;6155:48318;4009:131742;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34209;6155:48318;4009:131750">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6098:34209;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6098:34209;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6098:34209;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6098:34209;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6098:34209;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6098:34209;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6098:34209;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6098:34209;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34209;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6098:34209;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6098:34209;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6098:34209;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34209;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34209;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6098:34209;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6098:34209;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6098:34209;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34209;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34209;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6098:34209;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6098:34209;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6098:34209;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34209;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6098:34209;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6098:34209;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6098:34209;6155:47561" data-name="Menu">
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34209;6155:48382" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34209;6155:48382;4009:132174" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6098:34209;6155:48382;4009:132174;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34209;6155:48382;4009:132174;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34209;6155:48382;4009:132175">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6098:34210" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6098:34211" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6098:34212">
            <p className="leading-[1.5]">Settings</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6098:34213" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[100px]" data-node-id="6098:34214" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6098:34214;6155:20985">
                Set Default
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6098:34215" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6098:34215;6155:20977">
                Save Changes
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[842px] items-center relative shrink-0 w-full" data-node-id="6098:34216" data-name="Main setting">
          <div className="bg-white border-[#f1f1f5] border-r border-solid content-stretch flex flex-col h-full items-end overflow-clip p-[16px] relative shrink-0 w-[200px]" data-node-id="6098:34217" data-name="Setting Navigation">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6098:34217;6086:22217" data-name="Main Menu">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6098:34217;6086:22218">
                <p className="leading-[normal]">Settings Menu</p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6098:34217;6086:22219" data-name="Main Menu">
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22356" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22356;6086:19111" data-name="profile">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22356;6086:19111;3:13259" data-name="vuesax/linear/profile">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34217;6086:22356;6086:19111;3:13260" data-name="profile">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22356;6086:19112">
                    <p className="leading-[1.5]">Profile</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22357" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22357;6086:19114" data-name="calendar">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22357;6086:19114;3:28112" data-name="vuesax/linear/calendar">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearCalendar} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22357;6086:19115">
                    <p className="leading-[1.5]">{`Email & Calendar`}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22358" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22358;6086:19117" data-name="strongbox">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStrongbox} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22358;6086:19118">
                    <p className="leading-[1.5]">Storage</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22359" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22359;6086:19120" data-name="people">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22359;6086:19120;3:13609" data-name="vuesax/linear/people">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearPeople} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22359;6086:19121">
                    <p className="leading-[1.5]">Refer Team</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22360" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22360;6086:19123" data-name="notification">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22360;6086:19123;3:35975" data-name="vuesax/linear/notification">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34217;6086:22360;6086:19123;3:35976" data-name="notification">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification1} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22360;6086:19124">
                    <p className="leading-[1.5]">Notification</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22361" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22361;6086:19126" data-name="briefcase">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22361;6086:19126;3:42659" data-name="vuesax/linear/briefcase">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34217;6086:22361;6086:19126;3:42660" data-name="briefcase">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22361;6086:19127">
                    <p className="leading-[1.5]">Workspace</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22362" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22362;6086:19129" data-name="profile-2user">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22362;6086:19129;3:13296" data-name="vuesax/linear/profile-2user">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34217;6086:22362;6086:19129;3:13297" data-name="profile-2user">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile2User} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22362;6086:19130">
                    <p className="leading-[1.5]">Members</p>
                  </div>
                </div>
                <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6098:34217;6086:22363" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6098:34217;6086:22363;6086:21951" data-name="wallet-minus">
                    <div className="absolute contents inset-0" data-node-id="I6098:34217;6086:22363;6086:21951;3:6769" data-name="vuesax/linear/wallet-minus">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:34217;6086:22363;6086:21951;3:6770" data-name="wallet-minus">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletMinus} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6098:34217;6086:22363;6086:21952">
                    <p className="leading-[1.5]">Plans</p>
                  </div>
                </div>
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Integration" />
              </div>
            </div>
          </div>
          <div className="border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px px-[80px] py-[24px] relative" data-node-id="6098:34218" data-name="Main Settings">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6098:34219" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="6098:34220">
                Plans
              </p>
              <p className="font-['Inter:Medium'] font-medium min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-[min-content]" data-node-id="6098:34221">
                View your plan information or switch plans according to your needs
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6098:34222" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="bg-[#f9f9fb] border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="6098:34612" data-name="Info">
              <div className="relative shrink-0 size-[19px]" data-node-id="6098:34613" data-name="info-circle">
                <div className="absolute contents inset-0" data-node-id="I6098:34613;3:29384" data-name="vuesax/linear/info-circle">
                  <div className="absolute inset-[0_-26.32%_-26.32%_0]" data-node-id="I6098:34613;3:29385" data-name="info-circle">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfoCircle} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px]" data-node-id="6098:34614">
                There are 12 days left on your trial
              </p>
              <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[127px]" data-node-id="6098:34623" data-name="Button">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6098:34623;6155:20977">
                  Add billing details
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6099:14482" data-name="Compare Plans">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6098:34630" data-name="Head">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161618] text-[18px] text-ellipsis tracking-[-0.36px] whitespace-nowrap" data-node-id="6098:34631">
                  <p className="leading-[1.5] overflow-hidden text-ellipsis">Pricing Plans</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6098:34640" data-name="Billing Period">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161618] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6098:34634">
                    <p className="leading-[normal] overflow-hidden text-ellipsis">Annually</p>
                  </div>
                  <Toggle className="bg-[#e5e5ec] content-stretch flex items-start pl-[2px] pr-[18px] py-[2px] relative rounded-[100px] shrink-0" />
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161618] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6098:34639">
                    <p className="leading-[normal] overflow-hidden text-ellipsis">Monthly</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6098:34658" data-name="Pricing Card">
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip p-[4px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]" data-node-id="6098:34641" data-name="Button">
                  <div className="bg-gradient-to-b content-stretch flex flex-col from-[#dcd9fe] gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 to-white w-full" data-node-id="6098:34642" data-name="image">
                    <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6099:14099" data-name="Button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I6099:14099;4006:547" data-name="plus">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAddSquare} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6099:14114" data-name="Text">
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px]" data-node-id="6099:14116">
                        Plus PLan
                      </p>
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[24px] text-center tracking-[-0.72px]" data-node-id="6099:14118">
                        $34
                      </p>
                      <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6099:14115">
                        per user/month, billed monthly
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6098:34643" data-name="Text">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="6098:34647" data-name="Line">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] w-full" data-node-id="6099:14159">
                      For growing teams
                    </p>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14137" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14128" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14128;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14128;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14129">
                        Enhanced email sending
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14151" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14152" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14152;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14152;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14153">
                        Permission settings
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14143" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14144" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14144;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14144;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14145">
                        Upgraded contact analysis
                      </p>
                    </div>
                    <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-full" data-node-id="6098:34667" data-name="Button">
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6098:34667;6155:20985">
                        Downgrade to Plus
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip p-[4px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]" data-node-id="6099:14161" data-name="Button">
                  <div className="bg-gradient-to-b content-stretch flex flex-col from-[#effcd3] gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 to-white w-full" data-node-id="6099:14162" data-name="image">
                    <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6099:14163" data-name="Button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I6099:14163;4006:547" data-name="plus">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAddSquare} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6099:14164" data-name="Text">
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px]" data-node-id="6099:14165">
                        Pro PLan
                      </p>
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[24px] text-center tracking-[-0.72px]" data-node-id="6099:14166">
                        $69
                      </p>
                      <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6099:14167">
                        per user/month, billed monthly
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14168" data-name="Text">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="6099:14169" data-name="Line">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine2} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] w-full" data-node-id="6099:14170">
                      For scaling businesses
                    </p>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14171" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14172" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14172;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14172;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14173">{`Full access permissions `}</p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14174" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14175" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14175;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14175;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14176">
                        Advanced data enrichment
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14177" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14178" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14178;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14178;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14179">
                        Priority support
                      </p>
                    </div>
                    <div className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="6099:14180" data-name="Button">
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6099:14180;6155:20989">
                        Current plan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px overflow-clip p-[4px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]" data-node-id="6099:14211" data-name="Button">
                  <div className="bg-gradient-to-b content-stretch flex flex-col from-[#dbecfd] gap-[16px] items-start justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 to-white w-full" data-node-id="6099:14212" data-name="image">
                    <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6099:14213" data-name="Button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I6099:14213;4006:547" data-name="plus">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAddSquare} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6099:14214" data-name="Text">
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px]" data-node-id="6099:14215">
                        Enterprise PLan
                      </p>
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[24px] text-center tracking-[-0.72px]" data-node-id="6099:14216">
                        $119
                      </p>
                      <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6099:14217">
                        per user/month, billed annually
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14218" data-name="Text">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="6099:14219" data-name="Line">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine2} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] w-full" data-node-id="6099:14220">
                      For large organizations
                    </p>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14221" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14222" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14222;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14222;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14223">
                        Unlimited reporting
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14224" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14225" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14225;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14225;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14226">
                        SAML and SSO
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6099:14227" data-name="Features">
                      <div className="relative shrink-0 size-[16px]" data-node-id="6099:14228" data-name="tick-circle">
                        <div className="absolute contents inset-0" data-node-id="I6099:14228;3:29179" data-name="vuesax/linear/tick-circle">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14228;3:29180" data-name="tick-circle">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14229">
                        Custom billing
                      </p>
                    </div>
                    <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="6099:14230" data-name="Button">
                      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6099:14230;6155:20977">
                        Talk Our Sales
                      </p>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6099:14481" data-name="History">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161618] text-[18px] text-ellipsis tracking-[-0.36px] whitespace-nowrap" data-node-id="6099:14479">
                <p className="leading-[1.5] overflow-hidden text-ellipsis">Transaction History</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6099:14391" data-name="Table">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="6099:14392" data-name="Table Head">
                  <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[308px]" data-node-id="6099:14393" data-name="Card">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="6099:14394">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#44444a] text-[12px] tracking-[-0.24px]" data-node-id="6099:14395">
                        Pricing Type
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[252px]" data-node-id="6099:14396" data-name="Card">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14397">{`Date & Time`}</p>
                  </div>
                  <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[260px]" data-node-id="6099:14398" data-name="Card">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14399">
                      Status
                    </p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6099:14400" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6099:14401" data-name="Content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[308px]" data-node-id="6099:14402" data-name="Row">
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14403" data-name="Card">
                      <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6099:14508" data-name="Button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I6099:14508;4006:547" data-name="plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAddSquare} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6099:14405">
                        Plus Plan
                      </p>
                    </div>
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14524" data-name="Card">
                      <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[32px]" data-node-id="6099:14525" data-name="Button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I6099:14525;4006:547" data-name="plus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAddSquare} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6099:14526">
                        Pro PLan
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[252px]" data-node-id="6099:14415" data-name="Row">
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14416" data-name="Card">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6099:14520">
                        1 Jan 2025, 1:32 PM
                      </p>
                    </div>
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14522" data-name="Card">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6099:14523">
                        1 Des 2024, 1:32 PM
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6099:14424" data-name="Row">
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14425" data-name="Card">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#56a81c] text-[14px] tracking-[-0.28px]" data-node-id="6099:14426">
                        Success
                      </p>
                    </div>
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14536" data-name="Card">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#56a81c] text-[14px] tracking-[-0.28px]" data-node-id="6099:14537">
                        Success
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6099:14433" data-name="Row">
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14434" data-name="Card">
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6099:14435">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6099:14435;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14435;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6099:14436" data-name="Card">
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6099:14437">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6099:14437;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6099:14437;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
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
      </div>
    </div>
  );
}
