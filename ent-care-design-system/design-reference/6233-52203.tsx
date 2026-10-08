const imgProfile = "assets/cliently/6233-52203-a9fe9.svg";
const imgWalletMinus = "assets/cliently/6233-52203-982d1.svg";
const imgCategory = "assets/cliently/6233-52203-2c8ea.svg";
const imgNotification = "assets/cliently/6233-52203-c6c0e.svg";
const imgMessageText = "assets/cliently/6233-52203-7fdbf.svg";
const imgNote = "assets/cliently/6233-52203-3a1a9.svg";
const imgTaskSquare = "assets/cliently/6233-52203-275c0.svg";
const imgVuesaxLinearMessageQuestion = "assets/cliently/6233-52203-3df1b.svg";
const imgProperty132Px = "assets/cliently/6233-52203-75dac.png";
const imgGroup1 = "assets/cliently/6233-52203-72053.svg";
const imgUserOctagon = "assets/cliently/6233-52203-deb54.svg";
const imgArrowDown = "assets/cliently/6233-52203-749f8.svg";
const imgSidebarLeft = "assets/cliently/6233-52203-6ebdb.svg";
const imgCategory2 = "assets/cliently/6233-52203-5b16d.svg";
const imgArrowDown1 = "assets/cliently/6233-52203-71b71.svg";
const imgAdd = "assets/cliently/6233-52203-509d0.svg";
const imgFolder2 = "assets/cliently/6233-52203-c4cc5.svg";
const imgSetting = "assets/cliently/6233-52203-cf1ab.svg";
const imgVuesaxLinearCalendar = "assets/cliently/6233-52203-14e5d.svg";
const imgStrongbox = "assets/cliently/6233-52203-2f18c.svg";
const imgVuesaxLinearPeople = "assets/cliently/6233-52203-9f2f2.svg";
const imgNotification1 = "assets/cliently/6233-52203-3e198.svg";
const imgBriefcase = "assets/cliently/6233-52203-6137f.svg";
const imgProfile2User = "assets/cliently/6233-52203-14106.svg";
const imgLine = "assets/cliently/6233-52203-4d540.svg";
const imgSearchNormal = "assets/cliently/6233-52203-11207.svg";
const imgFilter = "assets/cliently/6233-52203-5e44d.svg";
const imgPlus = "assets/cliently/6233-52203-3dab3.svg";
const imgMore = "assets/cliently/6233-52203-04859.svg";

type AccessLevelStatusProps = {
  className?: string;
  darkmode?: "Off";
  status?: "Members" | "Admin";
};

function AccessLevelStatus({ className, darkmode = "Off", status = "Admin" }: AccessLevelStatusProps) {
  const isMembersAndOff = status === "Members" && darkmode === "Off";
  return (
    <div className={className || "bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px]"} id={isMembersAndOff ? "node-6155_21244" : "node-6155_21241"}>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" id={isMembersAndOff ? "node-6155_21246" : "node-6155_21243"}>
        {isMembersAndOff ? "Members" : "Admin"}
      </p>
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  menu?: "Profile" | "Plans" | "Integration";
};

function NavMenu({ className, active = false, menu = "Profile" }: NavMenuProps) {
  const isIntegrationAndFalse = menu === "Integration" && !active;
  const isPlansAndFalse = menu === "Plans" && !active;
  const isProfileAndFalse = menu === "Profile" && !active;
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isIntegrationAndFalse ? "node-6086_21958" : isPlansAndFalse ? "node-6086_21942" : "node-6086_19110"}>
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
      {isPlansAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:21943" data-name="wallet-minus">
            <div className="absolute contents inset-0" data-node-id="I6086:21943;3:6769" data-name="vuesax/linear/wallet-minus">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6086:21943;3:6770" data-name="wallet-minus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletMinus} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:21944">
            <p className="leading-[1.5]">Plans</p>
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

type LSettingsMembersProps = {
  className?: string;
  responsive?: "No";
};

function LSettingsMembers({ className, responsive = "No" }: LSettingsMembersProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:52203">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-[900px] items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6097:14575" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6097:14575;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6097:14575;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6097:14575;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6097:14575;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6097:14575;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6097:14575;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6097:14575;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6097:14575;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6097:14575;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6097:14575;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6097:14575;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6097:14575;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6097:14575;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6097:14575;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6097:14575;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6097:14575;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14575;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14575;6155:48318;4009:131742" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:48318;4009:131742;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:14575;6155:48318;4009:131742;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14575;6155:48318;4009:131750">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6097:14575;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6097:14575;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6097:14575;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6097:14575;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6097:14575;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6097:14575;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6097:14575;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6097:14575;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14575;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6097:14575;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6097:14575;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6097:14575;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14575;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14575;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6097:14575;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6097:14575;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6097:14575;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14575;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14575;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6097:14575;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6097:14575;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6097:14575;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14575;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6097:14575;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6097:14575;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6097:14575;6155:47561" data-name="Menu">
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14575;6155:48382" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14575;6155:48382;4009:132174" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6097:14575;6155:48382;4009:132174;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:14575;6155:48382;4009:132174;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14575;6155:48382;4009:132175">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6097:14576" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6097:14577" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6097:14578">
            <p className="leading-[1.5]">Settings</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6097:14579" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[100px]" data-node-id="6097:14580" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6097:14580;6155:20985">
                Set Default
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6097:14581" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6097:14581;6155:20977">
                Save Changes
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[842px] items-center relative shrink-0 w-full" data-node-id="6097:14582" data-name="Main setting">
          <div className="bg-white border-[#f1f1f5] border-r border-solid content-stretch flex flex-col h-full items-end overflow-clip p-[16px] relative shrink-0 w-[200px]" data-node-id="6097:14583" data-name="Setting Navigation">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6097:14583;6086:22217" data-name="Main Menu">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6097:14583;6086:22218">
                <p className="leading-[normal]">Settings Menu</p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6097:14583;6086:22219" data-name="Main Menu">
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22356" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22356;6086:19111" data-name="profile">
                    <div className="absolute contents inset-0" data-node-id="I6097:14583;6086:22356;6086:19111;3:13259" data-name="vuesax/linear/profile">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:14583;6086:22356;6086:19111;3:13260" data-name="profile">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22356;6086:19112">
                    <p className="leading-[1.5]">Profile</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22357" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22357;6086:19114" data-name="calendar">
                    <div className="absolute contents inset-0" data-node-id="I6097:14583;6086:22357;6086:19114;3:28112" data-name="vuesax/linear/calendar">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearCalendar} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22357;6086:19115">
                    <p className="leading-[1.5]">{`Email & Calendar`}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22358" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22358;6086:19117" data-name="strongbox">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStrongbox} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22358;6086:19118">
                    <p className="leading-[1.5]">Storage</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22359" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22359;6086:19120" data-name="people">
                    <div className="absolute contents inset-0" data-node-id="I6097:14583;6086:22359;6086:19120;3:13609" data-name="vuesax/linear/people">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearPeople} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22359;6086:19121">
                    <p className="leading-[1.5]">Refer Team</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22360" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22360;6086:19123" data-name="notification">
                    <div className="absolute contents inset-0" data-node-id="I6097:14583;6086:22360;6086:19123;3:35975" data-name="vuesax/linear/notification">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:14583;6086:22360;6086:19123;3:35976" data-name="notification">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification1} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22360;6086:19124">
                    <p className="leading-[1.5]">Notification</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22361" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22361;6086:19126" data-name="briefcase">
                    <div className="absolute contents inset-0" data-node-id="I6097:14583;6086:22361;6086:19126;3:42659" data-name="vuesax/linear/briefcase">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:14583;6086:22361;6086:19126;3:42660" data-name="briefcase">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22361;6086:19127">
                    <p className="leading-[1.5]">Workspace</p>
                  </div>
                </div>
                <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6097:14583;6086:22362" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6097:14583;6086:22362;6086:19150" data-name="profile-2user">
                    <div className="absolute contents inset-0" data-node-id="I6097:14583;6086:22362;6086:19150;3:13296" data-name="vuesax/linear/profile-2user">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:14583;6086:22362;6086:19150;3:13297" data-name="profile-2user">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile2User} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6097:14583;6086:22362;6086:19151">
                    <p className="leading-[1.5]">Members</p>
                  </div>
                </div>
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Plans" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Integration" />
              </div>
            </div>
          </div>
          <div className="border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px px-[80px] py-[24px] relative" data-node-id="6097:14969" data-name="Main Settings">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6097:14970" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="6097:14971">
                Members
              </p>
              <p className="font-['Inter:Medium'] font-medium min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-[min-content]" data-node-id="6097:14972">
                Manage members and users of your workspace and set their access level. You can invite new users up to the seats allowed on your plan.
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6097:14973" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="6097:15005" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]" data-node-id="6097:15091" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="6097:15092" data-name="search-normal">
                  <div className="absolute contents inset-0" data-node-id="I6097:15092;3:21503" data-name="vuesax/linear/search-normal">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:15092;3:21504" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6097:15093">
                  Search Tasks
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[82px]" data-node-id="6097:15021" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6097:15021;4006:547" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilter} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6097:15021;4006:548">
                  Filter
                </p>
              </div>
              <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[127px]" data-node-id="6097:15007" data-name="Button">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                <div className="relative shrink-0 size-[16px]" data-node-id="I6097:15007;4006:543" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6097:15007;4006:544">
                  Invite member
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6097:15212" data-name="Table">
              <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="6097:15100" data-name="Table Head">
                <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[348px]" data-node-id="6097:15101" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="6097:15102">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#44444a] text-[12px] tracking-[-0.24px]" data-node-id="6097:15103">
                      User
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[212px]" data-node-id="6097:15104" data-name="Card">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6097:15105">
                    Access Level
                  </p>
                </div>
                <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[260px]" data-node-id="6097:15106" data-name="Card">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6097:15107">
                    Status
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6097:15213" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6097:15110" data-name="Content">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]" data-node-id="6097:15131" data-name="Row">
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15132" data-name="Card">
                    <div className="bg-[#ceefdf] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-node-id="6097:15215" data-name="Avatar/Text/Green">
                      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] left-[16px] text-[#27a376] text-[12px] text-center top-[16px] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I6097:15215;11:1079">
                        <p className="leading-[1.5]">SL</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6097:15135">
                      samlee@gmail.com
                    </p>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15233" data-name="Card">
                    <div className="bg-[#ffedec] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-node-id="6097:15234" data-name="Avatar/Text/Red">
                      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] left-[16px] text-[#e03137] text-[12px] text-center top-[16px] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I6097:15234;11:1101">
                        <p className="leading-[1.5]">JD</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6097:15235">
                      jdoe@gmail.com
                    </p>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15251" data-name="Card">
                    <div className="bg-[#fff6d3] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-node-id="6097:15252" data-name="Avatar/Text/Yellow">
                      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] left-[16px] text-[#ffd023] text-[12px] text-center top-[16px] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I6097:15252;11:1090">
                        <p className="leading-[1.5]">OP</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6097:15253">
                      olpeter@gmail.com
                    </p>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15254" data-name="Card">
                    <div className="bg-[#f1f2f4] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-node-id="6097:15255" data-name="Avatar/Text/Grey">
                      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:ExtraBold'] font-extrabold justify-center leading-[0] left-[16px] text-[#718096] text-[12px] text-center top-[16px] tracking-[0.4px] uppercase whitespace-nowrap" data-node-id="I6097:15255;11:1112">
                        <p className="leading-[1.5]">AA</p>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6097:15256">
                      ahmedarm@gmail.com
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6097:15124" data-name="Row">
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15125" data-name="Card">
                    <AccessLevelStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6098:33882" data-name="Card">
                    <AccessLevelStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Members" />
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6098:33886" data-name="Card">
                    <AccessLevelStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" />
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6098:33890" data-name="Card">
                    <AccessLevelStatus className="bg-[#e5e5ec] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[8px] relative rounded-[4px] shrink-0" status="Members" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6097:15287" data-name="Row">
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15288" data-name="Card">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#3863c6] text-[14px] tracking-[-0.28px]" data-node-id="6097:15289">
                      Invite Pending
                    </p>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15290" data-name="Card">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#3863c6] text-[14px] tracking-[-0.28px]" data-node-id="6097:15291">
                      Invite Pending
                    </p>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15292" data-name="Card">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#3863c6] text-[14px] tracking-[-0.28px]" data-node-id="6097:15293">
                      Invite Pending
                    </p>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6098:33898" data-name="Card">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[#3863c6] text-[14px] tracking-[-0.28px]" data-node-id="6098:33899">
                      Invite Pending
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6097:15163" data-name="Row">
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15164" data-name="Card">
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6097:15165">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]" data-name="more">
                          <div className="absolute contents inset-0" data-node-id="I6097:15165;3:34106" data-name="vuesax/linear/more">
                            <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:15165;3:34107" data-name="more">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15166" data-name="Card">
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6097:15167">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]" data-name="more">
                          <div className="absolute contents inset-0" data-node-id="I6097:15167;3:34106" data-name="vuesax/linear/more">
                            <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:15167;3:34107" data-name="more">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6097:15168" data-name="Card">
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6097:15169">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]" data-name="more">
                          <div className="absolute contents inset-0" data-node-id="I6097:15169;3:34106" data-name="vuesax/linear/more">
                            <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6097:15169;3:34107" data-name="more">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#f1f1f5] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6098:33900" data-name="Card">
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6098:33901">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]" data-name="more">
                          <div className="absolute contents inset-0" data-node-id="I6098:33901;3:34106" data-name="vuesax/linear/more">
                            <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6098:33901;3:34107" data-name="more">
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
  );
}
