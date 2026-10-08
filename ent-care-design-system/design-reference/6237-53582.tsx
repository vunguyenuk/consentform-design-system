const assetPathPrefix = "https://www.figma.com/api/mcp/asset/9e8e16d2-fb97-43ae-9ffc-80ef824074ee";
const imgVuesaxLinearCalendar = `${assetPathPrefix}/79f91.svg`;
const imgStrongbox = `${assetPathPrefix}/53364.svg`;
const imgVuesaxLinearPeople = `${assetPathPrefix}/b9114.svg`;
const imgNotification = `${assetPathPrefix}/ca4e6.svg`;
const imgBriefcase = `${assetPathPrefix}/5e1ed.svg`;
const imgProfile2User = `${assetPathPrefix}/fa937.svg`;
const imgWalletMinus = `${assetPathPrefix}/7dfd4.svg`;
const imgCategory = `${assetPathPrefix}/9cb65.svg`;
const imgProfile = `${assetPathPrefix}/826c2.svg`;
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification1 = `${assetPathPrefix}/a31fd.svg`;
const imgNote = `${assetPathPrefix}/46e76.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/7a272.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgAvatarMan1 = `${assetPathPrefix}/3af20.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/71b71.svg`;
const imgSidebarLeft = `${assetPathPrefix}/9f2cf.svg`;
const imgMessageText = `${assetPathPrefix}/925fe.svg`;
const imgTaskSquare = `${assetPathPrefix}/85b6d.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSetting = `${assetPathPrefix}/a2177.svg`;
const imgInfoCircle = `${assetPathPrefix}/edd79.svg`;
const imgLine = `${assetPathPrefix}/4c2b0.svg`;
const imgDocumentUpload = `${assetPathPrefix}/3dab3.svg`;
const imgGroup = `${assetPathPrefix}/1f333.svg`;
const imgGroup2 = `${assetPathPrefix}/46c8e.svg`;
const imgArrowDown1 = `${assetPathPrefix}/749f8.svg`;
const imgArrowDown2 = `${assetPathPrefix}/98eec.svg`;

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "On";
  menu?: "Profile" | "Workspace" | "Member" | "Email & Calendar" | "Storage" | "Refer Team" | "Tasks" | "Plans" | "Integration";
};

function NavMenu({ className, active = false, darkmode = "On", menu = "Email & Calendar" }: NavMenuProps) {
  const isEmailCalendarAndNotActiveAndOn = menu === "Email & Calendar" && !active && darkmode === "On";
  const isIntegrationAndNotActiveAndOn = menu === "Integration" && !active && darkmode === "On";
  const isMemberAndNotActiveAndOn = menu === "Member" && !active && darkmode === "On";
  const isPlansAndNotActiveAndOn = menu === "Plans" && !active && darkmode === "On";
  const isProfileAndActiveAndOn = menu === "Profile" && active && darkmode === "On";
  const isReferTeamAndNotActiveAndOn = menu === "Refer Team" && !active && darkmode === "On";
  const isStorageAndNotActiveAndOn = menu === "Storage" && !active && darkmode === "On";
  const isTasksAndNotActiveAndOn = menu === "Tasks" && !active && darkmode === "On";
  const isWorkspaceAndNotActiveAndOn = menu === "Workspace" && !active && darkmode === "On";
  return (
    <div className={className || `content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[185px] ${isProfileAndActiveAndOn ? "bg-[#252528]" : ""}`} id={isProfileAndActiveAndOn ? "node-6155_47975" : isIntegrationAndNotActiveAndOn ? "node-6155_47972" : isPlansAndNotActiveAndOn ? "node-6155_47969" : isMemberAndNotActiveAndOn ? "node-6155_47966" : isWorkspaceAndNotActiveAndOn ? "node-6155_47963" : isTasksAndNotActiveAndOn ? "node-6155_47960" : isReferTeamAndNotActiveAndOn ? "node-6155_47957" : isStorageAndNotActiveAndOn ? "node-6155_47954" : "node-6155_47951"}>
      {isEmailCalendarAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47952" data-name="calendar">
            <div className="absolute contents inset-0" data-node-id="I6155:47952;3:28112" data-name="vuesax/linear/calendar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearCalendar} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47953">
            <p className="leading-[1.5]">{`Email & Calendar`}</p>
          </div>
        </>
      )}
      {isStorageAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47955" data-name="strongbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStrongbox} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47956">
            <p className="leading-[1.5]">Storage</p>
          </div>
        </>
      )}
      {isReferTeamAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47958" data-name="people">
            <div className="absolute contents inset-0" data-node-id="I6155:47958;3:13609" data-name="vuesax/linear/people">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearPeople} />
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47959">
            <p className="leading-[1.5]">Refer Team</p>
          </div>
        </>
      )}
      {isTasksAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47961" data-name="notification">
            <div className="absolute contents inset-0" data-node-id="I6155:47961;3:35975" data-name="vuesax/linear/notification">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47961;3:35976" data-name="notification">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47962">
            <p className="leading-[1.5]">Notification</p>
          </div>
        </>
      )}
      {isWorkspaceAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47964" data-name="briefcase">
            <div className="absolute contents inset-0" data-node-id="I6155:47964;3:42659" data-name="vuesax/linear/briefcase">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47964;3:42660" data-name="briefcase">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBriefcase} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47965">
            <p className="leading-[1.5]">Workspace</p>
          </div>
        </>
      )}
      {isMemberAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47967" data-name="profile-2user">
            <div className="absolute contents inset-0" data-node-id="I6155:47967;3:13296" data-name="vuesax/linear/profile-2user">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47967;3:13297" data-name="profile-2user">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile2User} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47968">
            <p className="leading-[1.5]">Members</p>
          </div>
        </>
      )}
      {isPlansAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47970" data-name="wallet-minus">
            <div className="absolute contents inset-0" data-node-id="I6155:47970;3:6769" data-name="vuesax/linear/wallet-minus">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47970;3:6770" data-name="wallet-minus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletMinus} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47971">
            <p className="leading-[1.5]">Plans</p>
          </div>
        </>
      )}
      {isIntegrationAndNotActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47973" data-name="category">
            <div className="absolute contents inset-0" data-node-id="I6155:47973;3:33732" data-name="vuesax/linear/category">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47973;3:33733" data-name="category">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47974">
            <p className="leading-[1.5]">Integration</p>
          </div>
        </>
      )}
      {isProfileAndActiveAndOn && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:47976" data-name="profile">
            <div className="absolute contents inset-0" data-node-id="I6155:47976;3:13259" data-name="vuesax/linear/profile">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:47976;3:13260" data-name="profile">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:47977">
            <p className="leading-[1.5]">Profile</p>
          </div>
        </>
      )}
    </div>
  );
}

type SettingNavigationProps = {
  className?: string;
  darkmode?: "On";
};

function SettingNavigation({ className, darkmode = "On" }: SettingNavigationProps) {
  return (
    <div className={className || "border-[#252528] border-r border-solid content-stretch flex flex-col h-[1024px] items-end overflow-clip p-[16px] relative w-[240px]"} data-node-id="6155:49775">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="6155:49568" data-name="Main Menu">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6155:49569">
          <p className="leading-[normal]">Settings Menu</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6155:49570" data-name="Main Menu">
          <NavMenu active className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Profile" />
          <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
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
  );
}

type NavMenu1Props = {
  className?: string;
  active?: boolean;
  darkmode?: "On";
  menu?: "Dashboard" | "Help & Center" | "Notifications" | "Notes";
};

function NavMenu1({ className, active = false, darkmode = "On", menu = "Dashboard" }: NavMenu1Props) {
  const isDashboardAndFalseAndOn = menu === "Dashboard" && !active && darkmode === "On";
  const isHelpCenterAndFalseAndOn = menu === "Help & Center" && !active && darkmode === "On";
  const isNotesAndFalseAndOn = menu === "Notes" && !active && darkmode === "On";
  const isNotificationsAndFalseAndOn = menu === "Notifications" && !active && darkmode === "On";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isHelpCenterAndFalseAndOn ? "node-6155_47837" : isNotesAndFalseAndOn ? "node-6155_47831" : isNotificationsAndFalseAndOn ? "node-6155_47825" : "node-6155_47822"}>
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
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification1} />
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

type DSettingsProfileProps = {
  className?: string;
  responsive?: "No";
};

function DSettingsProfile({ className, responsive = "No" }: DSettingsProfileProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6237:53582">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6231:39109" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6231:39109;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6231:39109;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6231:39109;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6231:39109;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6231:39109;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6231:39109;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6231:39109;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6231:39109;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6231:39109;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:39109;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6231:39109;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6231:39109;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6231:39109;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6231:39109;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6231:39109;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6231:39109;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6231:39109;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:39109;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6231:39109;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6231:39109;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6231:39109;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:39109;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:39109;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6231:39109;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48426" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:39109;6155:48426;6155:47829" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48426;6155:47829;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6231:39109;6155:48426;6155:47829;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48426;6155:47830">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48428" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:39109;6155:48428;6155:47835" data-name="task-square">
                  <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48428;6155:47835;3:36664" data-name="vuesax/linear/task-square">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6231:39109;6155:48428;6155:47835;3:36665" data-name="task-square">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48428;6155:47836">
                  <p className="leading-[1.5]">Tasks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6231:39109;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6231:39109;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6231:39109;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:39109;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6231:39109;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6231:39109;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6231:39109;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:39109;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6231:39109;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6231:39109;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6231:39109;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6231:39109;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6231:39109;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6231:39109;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6231:39109;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6231:39109;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6231:39109;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:39109;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6231:39109;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6231:39109;6155:48449" data-name="Menu">
              <NavMenu1 className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6231:39109;6155:48451" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6231:39109;6155:48451;6155:47862" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6231:39109;6155:48451;6155:47862;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6231:39109;6155:48451;6155:47862;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6231:39109;6155:48451;6155:47863">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6146:19842" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6146:19843" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6146:19844">
            <p className="leading-[1.5]">Settings</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6146:19845" data-name="Buttons">
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[100px]" data-node-id="6146:19846" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19846;6155:21045">
                Set Default
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6146:19847" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19847;6155:21037">
                Save Changes
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="bg-[#161618] content-stretch flex h-[842px] items-center relative shrink-0 w-full" data-node-id="6146:19848" data-name="Main setting">
          <SettingNavigation className="border-[#252528] border-r border-solid content-stretch flex flex-col h-full items-end overflow-clip p-[16px] relative shrink-0 w-[200px]" />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px px-[80px] py-[24px] relative" data-node-id="6146:19850" data-name="Main Settings">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap" data-node-id="6146:19851">
              Profile Settings
            </p>
            <div className="bg-[#252528] border border-[#252528] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="6146:19852" data-name="Total tasks">
              <div className="relative shrink-0 size-[19px]" data-node-id="6146:19853" data-name="info-circle">
                <div className="absolute contents inset-0" data-node-id="I6146:19853;3:29384" data-name="vuesax/linear/info-circle">
                  <div className="absolute inset-[0_-26.32%_-26.32%_0]" data-node-id="I6146:19853;3:29385" data-name="info-circle">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfoCircle} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19854">
                Changes to your profile will apply to all of your workspaces.
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6146:19855" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="6146:19856" data-name="Profile Picture">
              <div className="relative shrink-0 size-[64px]" data-node-id="6146:19857" data-name="Avatar/Man/1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgAvatarMan1} width="64" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-node-id="6146:19858" data-name="Headline">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-[min-content]" data-node-id="6146:19859">
                  Profile Picture
                </p>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="6146:19860">
                  <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[125px]" data-node-id="6146:19861" data-name="Button">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(91, 90, 100) 0%, rgb(91, 90, 100) 100%)" }} />
                    <div className="relative shrink-0 size-[16px]" data-node-id="I6146:19861;6155:21032" data-name="plus">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDocumentUpload} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19861;6155:21033">
                      Upload New
                    </p>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
                  </div>
                  <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[80px]" data-node-id="6146:19862" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19862;6155:21045">
                      Remove
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] w-[min-content]" data-node-id="6146:19863">
                  PNG or JPG files up to 5mb, at least 400px by 400px
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6146:19864" data-name="Field">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6146:19865">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6146:19866" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6146:19866;6148:37375" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6146:19866;6148:37376">
                      First Name
                    </p>
                  </div>
                  <div className="border border-[#5b5a64] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6146:19866;6148:37378" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19866;6148:37379">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">John</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6146:19867" data-name="Field">
                  <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6146:19867;6148:37375" data-name="area title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6146:19867;6148:37376">
                      Last Name
                    </p>
                  </div>
                  <div className="border border-[#5b5a64] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6146:19867;6148:37378" data-name="Input Area">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19867;6148:37379">
                      <p className="leading-[1.5] overflow-hidden text-ellipsis">Cornor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="6146:19868" data-name="Field">
                <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6146:19868;6148:37414" data-name="area title">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6146:19868;6148:37415">
                    Phone Number
                  </p>
                </div>
                <div className="border border-[#5b5a64] border-solid content-stretch flex gap-[10px] h-[48px] items-center pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6146:19868;6148:37417" data-name="Input Area">
                  <div className="border-[#5b5a64] border-r border-solid content-stretch flex gap-[10px] h-[48px] items-center p-[16px] relative shrink-0 w-[71px]" data-node-id="I6146:19868;6148:37418" data-name="Input Area">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I6146:19868;6148:37419" data-name="circle-flags:us">
                      <div className="absolute contents inset-0" data-node-id="I6146:19868;6148:37420" data-name="Mask group">
                        <div className="absolute inset-0 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-size-[20px_20px]" data-node-id="I6146:19868;6148:37423" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[14px]" data-node-id="I6146:19868;6148:37428" data-name="arrow-down">
                      <div className="absolute contents inset-0" data-node-id="I6146:19868;6148:37428;2313:8342" data-name="vuesax/linear/arrow-down">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19868;6148:37428;2313:8343" data-name="arrow-down">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19868;6148:37429">
                    <p className="leading-[1.5] overflow-hidden text-ellipsis">+1213421413</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6146:19869" data-name="Field">
                <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6146:19869;6148:37366" data-name="area title">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6146:19869;6148:37367">
                    Email Address
                  </p>
                </div>
                <div className="border border-[#4d81e7] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6146:19869;6148:37369" data-name="Input Area">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] h-[24px] items-center leading-[0] min-w-px relative text-[14px] whitespace-nowrap" data-node-id="I6146:19869;6148:37370" data-name="input">
                    <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center not-italic relative shrink-0 text-[#bebec8] tracking-[-0.28px]" data-node-id="I6146:19869;6148:37371">
                      <p className="leading-[1.5]">yourname@mail.com</p>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular'] font-normal justify-center relative shrink-0 text-[#4d81e7]" data-node-id="I6146:19869;6148:37372">
                      <p className="leading-[1.6]">|</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6146:19870" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6146:19871" data-name="Fields">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6146:19872" data-name="Field">
                <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6146:19872;6148:37375" data-name="area title">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6146:19872;6148:37376">
                    Prefered Timezone
                  </p>
                </div>
                <div className="border border-[#5b5a64] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6146:19872;6148:37378" data-name="Input Area">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19872;6148:37379">
                    <p className="leading-[1.5] overflow-hidden text-ellipsis">UTC + 7</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6146:19872;6148:37380" data-name="eye-off">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="6146:19873" data-name="Field">
                <div className="content-stretch flex gap-[2px] h-[22px] items-start relative shrink-0 w-full" data-node-id="I6146:19873;6148:37375" data-name="area title">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="I6146:19873;6148:37376">{`Start Week on `}</p>
                </div>
                <div className="border border-[#5b5a64] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6146:19873;6148:37378" data-name="Input Area">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19873;6148:37379">
                    <p className="leading-[1.5] overflow-hidden text-ellipsis">Monday</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6146:19873;6148:37380" data-name="eye-off">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown2} />
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
