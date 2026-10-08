const assetPathPrefix = "https://www.figma.com/api/mcp/asset/35bef568-aecf-4a83-b098-13601cd31a00";
const imgProfile = `${assetPathPrefix}/a9fe9.svg`;
const imgStrongbox = `${assetPathPrefix}/2f18c.svg`;
const imgVuesaxLinearPeople = `${assetPathPrefix}/9f2f2.svg`;
const imgNotification = `${assetPathPrefix}/3e198.svg`;
const imgBriefcase = `${assetPathPrefix}/6137f.svg`;
const imgProfile2User = `${assetPathPrefix}/affad.svg`;
const imgWalletMinus = `${assetPathPrefix}/982d1.svg`;
const imgCategory = `${assetPathPrefix}/2c8ea.svg`;
const imgNotification1 = `${assetPathPrefix}/c6c0e.svg`;
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
const imgVuesaxLinearCalendar = `${assetPathPrefix}/68ccb.svg`;
const imgLine = `${assetPathPrefix}/73a98.svg`;
const imgDeviconGoogle = `${assetPathPrefix}/19720.svg`;
const imgLogosMicrosoftIcon = `${assetPathPrefix}/dadcd.svg`;
const imgGroup2 = `${assetPathPrefix}/b3245.svg`;
const imgUserOctagon1 = `${assetPathPrefix}/df9fb.svg`;
const imgEllipse168 = `${assetPathPrefix}/903d7.svg`;
const imgMore = `${assetPathPrefix}/04859.svg`;

type ToggleProps = {
  className?: string;
  enable?: "Yes";
};

function Toggle({ className, enable = "Yes" }: ToggleProps) {
  return (
    <div className={className || "bg-[#392fd0] content-stretch flex items-start justify-end pl-[18px] pr-[2px] py-[2px] relative rounded-[100px]"} data-node-id="3:1746">
      <div className="bg-white relative rounded-[100px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)] shrink-0 size-[14px]" data-node-id="3:1747" data-name="switch" />
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  menu?: "Profile" | "Workspace" | "Member" | "Storage" | "Refer Team" | "Tasks" | "Plans" | "Integration";
};

function NavMenu({ className, active = false, menu = "Profile" }: NavMenuProps) {
  const isIntegrationAndFalse = menu === "Integration" && !active;
  const isMemberAndFalse = menu === "Member" && !active;
  const isPlansAndFalse = menu === "Plans" && !active;
  const isProfileAndFalse = menu === "Profile" && !active;
  const isReferTeamAndFalse = menu === "Refer Team" && !active;
  const isStorageAndFalse = menu === "Storage" && !active;
  const isTasksAndFalse = menu === "Tasks" && !active;
  const isWorkspaceAndFalse = menu === "Workspace" && !active;
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isIntegrationAndFalse ? "node-6086_21958" : isPlansAndFalse ? "node-6086_21942" : isMemberAndFalse ? "node-6086_19128" : isWorkspaceAndFalse ? "node-6086_19125" : isTasksAndFalse ? "node-6086_19122" : isReferTeamAndFalse ? "node-6086_19119" : isStorageAndFalse ? "node-6086_19116" : "node-6086_19110"}>
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
      {isStorageAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:19117" data-name="strongbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStrongbox} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:19118">
            <p className="leading-[1.5]">Storage</p>
          </div>
        </>
      )}
      {isReferTeamAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:19120" data-name="people">
            <div className="absolute contents inset-0" data-node-id="I6086:19120;3:13609" data-name="vuesax/linear/people">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearPeople} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:19121">
            <p className="leading-[1.5]">Refer Team</p>
          </div>
        </>
      )}
      {isTasksAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:19123" data-name="notification">
            <div className="absolute contents inset-0" data-node-id="I6086:19123;3:35975" data-name="vuesax/linear/notification">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6086:19123;3:35976" data-name="notification">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:19124">
            <p className="leading-[1.5]">Notification</p>
          </div>
        </>
      )}
      {isWorkspaceAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:19126" data-name="briefcase">
            <div className="absolute contents inset-0" data-node-id="I6086:19126;3:42659" data-name="vuesax/linear/briefcase">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6086:19126;3:42660" data-name="briefcase">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:19127">
            <p className="leading-[1.5]">Workspace</p>
          </div>
        </>
      )}
      {isMemberAndFalse && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6086:19129" data-name="profile-2user">
            <div className="absolute contents inset-0" data-node-id="I6086:19129;3:13296" data-name="vuesax/linear/profile-2user">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6086:19129;3:13297" data-name="profile-2user">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile2User} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6086:19130">
            <p className="leading-[1.5]">Members</p>
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
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification1} />
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

type LSettingsEmailCalendarProps = {
  className?: string;
  responsive?: "No";
};

function LSettingsEmailCalendar({ className, responsive = "No" }: LSettingsEmailCalendarProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:51947">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-[900px] items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6088:24282" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6088:24282;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6088:24282;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6088:24282;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6088:24282;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6088:24282;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6088:24282;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6088:24282;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6088:24282;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6088:24282;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6088:24282;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6088:24282;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6088:24282;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6088:24282;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6088:24282;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6088:24282;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6088:24282;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24282;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6088:24282;6155:48318;4009:131742" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:48318;4009:131742;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6088:24282;6155:48318;4009:131742;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24282;6155:48318;4009:131750">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6088:24282;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6088:24282;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6088:24282;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6088:24282;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6088:24282;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6088:24282;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6088:24282;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6088:24282;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24282;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6088:24282;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6088:24282;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6088:24282;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24282;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24282;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6088:24282;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6088:24282;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6088:24282;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24282;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24282;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6088:24282;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6088:24282;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6088:24282;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24282;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6088:24282;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6088:24282;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6088:24282;6155:47561" data-name="Menu">
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24282;6155:48382" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6088:24282;6155:48382;4009:132174" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6088:24282;6155:48382;4009:132174;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6088:24282;6155:48382;4009:132174;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24282;6155:48382;4009:132175">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6088:24283" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6088:24284" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6088:24285">
            <p className="leading-[1.5]">Settings</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6088:24286" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[100px]" data-node-id="6088:24287" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6088:24287;6155:20985">
                Set Default
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6088:24288" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6088:24288;6155:20977">
                Save Changes
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[842px] items-center relative shrink-0 w-full" data-node-id="6088:24289" data-name="Main setting">
          <div className="bg-white border-[#f1f1f5] border-r border-solid content-stretch flex flex-col h-full items-end overflow-clip p-[16px] relative shrink-0 w-[200px]" data-node-id="6088:24290" data-name="Setting Navigation">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6088:24290;6086:22217" data-name="Main Menu">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6088:24290;6086:22218">
                <p className="leading-[normal]">Settings Menu</p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6088:24290;6086:22219" data-name="Main Menu">
                <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24290;6086:22356" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6088:24290;6086:22356;6086:19111" data-name="profile">
                    <div className="absolute contents inset-0" data-node-id="I6088:24290;6086:22356;6086:19111;3:13259" data-name="vuesax/linear/profile">
                      <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6088:24290;6086:22356;6086:19111;3:13260" data-name="profile">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24290;6086:22356;6086:19112">
                    <p className="leading-[1.5]">Profile</p>
                  </div>
                </div>
                <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6088:24290;6086:22357" data-name="Nav Menu">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6088:24290;6086:22357;6086:19135" data-name="calendar">
                    <div className="absolute contents inset-0" data-node-id="I6088:24290;6086:22357;6086:19135;3:28112" data-name="vuesax/linear/calendar">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearCalendar} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6088:24290;6086:22357;6086:19136">
                    <p className="leading-[1.5]">{`Email & Calendar`}</p>
                  </div>
                </div>
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Storage" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Refer Team" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Workspace" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Member" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Plans" />
                <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Integration" />
              </div>
            </div>
          </div>
          <div className="border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px px-[80px] py-[24px] relative" data-node-id="6088:24291" data-name="Main Settings">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6088:24831" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px]" data-node-id="6088:24292">{`Email & Calendar Settings`}</p>
              <p className="font-['Inter:Medium'] font-medium leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px]" data-node-id="6088:24829">
                <span className="leading-[1.5]">{`Connect multiple accounts to Attio, manage their sharing settings and blacklists independently. `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.5] text-[#020408] underline">Learn more.</span>
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6088:24296" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="6088:24940" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[196px]" data-node-id="6088:24949" data-name="Button">
                <div className="relative shrink-0 size-[14px]" data-node-id="6088:24967" data-name="devicon:google">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDeviconGoogle} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6088:24951">
                  Connect Google Account
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[206px]" data-node-id="6088:24953" data-name="Button">
                <div className="relative shrink-0 size-[14px]" data-node-id="6088:24962" data-name="logos:microsoft-icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogosMicrosoftIcon} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6088:24955">
                  Connect Microsoft Account
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6088:25026" data-name="Forwarding Address">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="6088:24984" data-name="Field">
                <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="6088:24985" data-name="area title">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6088:24986">
                    Forwarding Address
                  </p>
                </div>
                <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="6088:24988" data-name="Card">
                  <div className="border-[0.801px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5.781px] shadow-[0px_5.608px_8.012px_-4.807px_black,0px_0px_0px_1.602px_rgba(190,202,234,0.03)] shrink-0 size-[37px]" data-node-id="6088:25012" data-name="Logo">
                    <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5.781px]" />
                    <div className="absolute flex h-[50.924px] items-center justify-center left-[-6.76px] top-[-20.08px] w-[51.235px]" data-node-id="6088:25013">
                      <div className="-scale-y-100 flex-none rotate-30">
                        <div className="h-[36.967px] relative w-[37.818px]">
                          <div className="absolute inset-[-4.33%_-4.23%_-10.84%_-10.59%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[23.125px] top-1/2" data-node-id="6088:25018" data-name="user-octagon">
                      <div className="absolute contents inset-0" data-node-id="I6088:25018;3:13119" data-name="vuesax/bold/user-octagon">
                        <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6088:25018;3:13120" data-name="user-octagon">
                          <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                            <img alt="" className="block max-w-none size-full" src={imgUserOctagon1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3.205px_8.012px_0px_rgba(255,255,255,0.11)]" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative whitespace-nowrap" data-node-id="6088:24993" data-name="Text">
                    <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6088:24991">
                      Email Address
                    </p>
                    <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] w-[min-content]" data-node-id="6088:24989">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">as-mobbin@Cliently.email</p>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[14px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6088:25003" data-name="Button">
                    <div className="relative shrink-0 size-[10px]" data-node-id="6088:25011">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse168} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6088:25009">
                      In Sync
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6088:24995">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6088:24995;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6088:24995;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic overflow-hidden relative shrink-0 text-[#5b5a64] text-[12px] text-ellipsis tracking-[-0.24px] whitespace-nowrap" data-node-id="6088:25024">
                <span className="leading-[normal]">{`Learn more about `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] text-[#020408] underline">forwarding email here</span>
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6088:25034" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative rounded-[10px] shrink-0 w-full" data-node-id="6088:25035" data-name="Email Watermark">
              <div className="flex flex-row items-center self-stretch" data-node-id="6088:25044">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] h-full items-start not-italic relative shrink-0 w-[770px] whitespace-nowrap" data-name="Text">
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#161618] text-[14px] text-ellipsis tracking-[-0.28px] w-[min-content]" data-node-id="6088:25046">
                    <p className="leading-[1.5] overflow-hidden text-ellipsis">Email Watermark</p>
                  </div>
                  <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px]" data-node-id="6088:25045">{`Automatically add "Sent with Cliently" to the end of emails sent from Cliently.`}</p>
                </div>
              </div>
              <Toggle className="bg-[#392fd0] content-stretch flex items-start justify-end pl-[18px] pr-[2px] py-[2px] relative rounded-[100px] shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
