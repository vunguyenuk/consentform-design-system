const assetPathPrefix = "https://www.figma.com/api/mcp/asset/80ad0b20-92ff-4e9d-908d-8cbe3e5ef54d";
const imgEllipse169 = `${assetPathPrefix}/8a9dd.svg`;
const imgEllipse170 = `${assetPathPrefix}/de2ff.svg`;
const imgEllipse171 = `${assetPathPrefix}/df82e.svg`;
const imgEllipse172 = `${assetPathPrefix}/db478.svg`;
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification = `${assetPathPrefix}/a31fd.svg`;
const imgNote = `${assetPathPrefix}/46e76.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/7a272.svg`;
const imgSetting = `${assetPathPrefix}/ca8b3.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgAvatarMan1 = `${assetPathPrefix}/dd1fe.png`;
const imgAvatarWoman1 = `${assetPathPrefix}/e235c.png`;
const imgAvatarMan4 = `${assetPathPrefix}/5a373.png`;
const imgAvatarMan3 = `${assetPathPrefix}/ad848.png`;
const imgAvatarMan2 = `${assetPathPrefix}/64194.png`;
const imgAvatarWoman3 = `${assetPathPrefix}/27083.png`;
const imgAvatarWoman2 = `${assetPathPrefix}/b218a.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/71b71.svg`;
const imgSidebarLeft = `${assetPathPrefix}/9f2cf.svg`;
const imgMessageText = `${assetPathPrefix}/925fe.svg`;
const imgTaskSquare = `${assetPathPrefix}/b6b90.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSearchNormal = `${assetPathPrefix}/939e0.svg`;
const imgPlus = `${assetPathPrefix}/3dab3.svg`;
const imgBuilding3 = `${assetPathPrefix}/67705.svg`;
const imgMore = `${assetPathPrefix}/95bac.svg`;
const imgCheck = `${assetPathPrefix}/d2728.svg`;
const imgEdit2 = `${assetPathPrefix}/ff36d.svg`;
const imgSend2 = `${assetPathPrefix}/2c0a8.svg`;
const imgLine = `${assetPathPrefix}/2d0e8.svg`;
const imgTrash = `${assetPathPrefix}/c78c0.svg`;

type TaskDueDateProps = {
  className?: string;
  variant?: "Late";
};

function TaskDueDate({ className, variant = "Late" }: TaskDueDateProps) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center relative"} data-node-id="6118:18016">
      <div className="relative shrink-0 size-[6px]" data-node-id="6126:15934">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse169} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#db2a26] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6118:18006">
        Due 4 Days ago
      </p>
    </div>
  );
}

type TaskDueDate1Props = {
  className?: string;
  darkmode?: "On";
  variant?: "Safe" | "Warning" | "Late";
};

function TaskDueDate1({ className, darkmode = "On", variant = "Warning" }: TaskDueDate1Props) {
  const isLateAndOn = variant === "Late" && darkmode === "On";
  const isSafeAndOn = variant === "Safe" && darkmode === "On";
  return (
    <div className={className || `content-stretch flex gap-[6px] items-center relative ${darkmode === "On" && ["Late", "Safe"].includes(variant) ? "" : "justify-center"}`} id={isSafeAndOn ? "node-6155_22603" : isLateAndOn ? "node-6155_22600" : "node-6155_22597"}>
      <div className="relative shrink-0 size-[6px]" id={isSafeAndOn ? "node-6155_22604" : isLateAndOn ? "node-6155_22601" : "node-6155_22598"}>
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isSafeAndOn ? imgEllipse172 : isLateAndOn ? imgEllipse171 : imgEllipse170} />
      </div>
      <p className={`[word-break:break-word] font-["Inter:Semi_Bold"] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[-0.24px] whitespace-nowrap ${isSafeAndOn ? "text-[#4d81e7]" : isLateAndOn ? "text-[#ff4935]" : "text-[#ffd554]"}`} id={isSafeAndOn ? "node-6155_22605" : isLateAndOn ? "node-6155_22602" : "node-6155_22599"}>
        {isSafeAndOn ? "Due Mar 12" : isLateAndOn ? "Due 4 Days ago" : "Due Today"}
      </p>
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "On";
  menu?: "Dashboard" | "Help & Center" | "Settings" | "Notifications" | "Notes";
};

function NavMenu({ className, active = false, darkmode = "On", menu = "Dashboard" }: NavMenuProps) {
  const isDashboardAndFalseAndOn = menu === "Dashboard" && !active && darkmode === "On";
  const isHelpCenterAndFalseAndOn = menu === "Help & Center" && !active && darkmode === "On";
  const isNotesAndFalseAndOn = menu === "Notes" && !active && darkmode === "On";
  const isNotificationsAndFalseAndOn = menu === "Notifications" && !active && darkmode === "On";
  const isSettingsAndFalseAndOn = menu === "Settings" && !active && darkmode === "On";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isSettingsAndFalseAndOn ? "node-6155_47840" : isHelpCenterAndFalseAndOn ? "node-6155_47837" : isNotesAndFalseAndOn ? "node-6155_47831" : isNotificationsAndFalseAndOn ? "node-6155_47825" : "node-6155_47822"}>
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

type DTasksPageListViewProps = {
  className?: string;
  responsive?: "No";
};

function DTasksPageListView({ className, responsive = "No" }: DTasksPageListViewProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:53257">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6180:57755" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6180:57755;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6180:57755;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6180:57755;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6180:57755;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6180:57755;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6180:57755;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6180:57755;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6180:57755;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6180:57755;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6180:57755;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6180:57755;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6180:57755;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6180:57755;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6180:57755;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6180:57755;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6180:57755;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6180:57755;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6180:57755;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6180:57755;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6180:57755;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6180:57755;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6180:57755;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6180:57755;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6180:57755;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6180:57755;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6180:57755;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6180:57755;6155:48426" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6180:57755;6155:48426;6155:47829" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48426;6155:47829;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6180:57755;6155:48426;6155:47829;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6180:57755;6155:48426;6155:47830">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6180:57755;6155:48428" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6180:57755;6155:48428;6155:47856" data-name="task-square">
                  <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48428;6155:47856;3:36664" data-name="vuesax/linear/task-square">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6180:57755;6155:48428;6155:47856;3:36665" data-name="task-square">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6180:57755;6155:48428;6155:47857">
                  <p className="leading-[1.5]">Tasks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6180:57755;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6180:57755;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6180:57755;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6180:57755;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6180:57755;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6180:57755;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6180:57755;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6180:57755;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6180:57755;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6180:57755;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6180:57755;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6180:57755;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6180:57755;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6180:57755;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6180:57755;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6180:57755;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6180:57755;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6180:57755;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6180:57755;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6180:57755;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6180:57755;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6180:57755;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6180:57755;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6180:57755;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6180:57755;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6180:57755;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6180:57755;6155:48449" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6146:19577" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6146:19578" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6146:19579">
            <p className="leading-[1.5]">Tasks</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6180:58267" data-name="Buttons">
            <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6180:58268" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="6180:58269" data-name="search-normal">
                <div className="absolute contents inset-0" data-node-id="I6180:58269;3:21503" data-name="vuesax/linear/search-normal">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6180:58269;3:21504" data-name="search-normal">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6180:58270">
                Search Tasks
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6180:58271" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6180:58271;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6180:58271;6155:20977">
                New Task
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="bg-[#161618] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-node-id="6146:19586" data-name="Table">
          <div className="border-[#252528] border-b border-solid content-stretch flex h-[56px] items-center pr-[24px] relative shrink-0 w-[1180px]" data-node-id="6146:19587" data-name="Tabbing">
            <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip px-[24px] relative" data-node-id="6146:19588" data-name="Tabbing">
              <div className="border-[#796ff7] border-b-3 border-solid content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6146:19588;6155:20856" data-name="Tabbing 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#796ff7] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19588;6155:20857">
                  <p className="leading-[1.5]">List View</p>
                </div>
              </div>
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6146:19588;6155:20858" data-name="Tabbing 2">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6146:19588;6155:20859">
                  <p className="leading-[1.5]">Kanban</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6146:19589" data-name="Button">
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[142px]" data-node-id="6146:19590" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6146:19590;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19590;6155:21045">
                  Import/Export
                </p>
              </div>
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[92px]" data-node-id="6146:19591" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6146:19591;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19591;6155:21045">
                  Filter
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1180px]" data-node-id="6146:19592" data-name="Task Main">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="6146:19593" data-name="Table Head">
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[406px]" data-node-id="6146:19594" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="6146:19595">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#bebec8] text-[12px] tracking-[-0.24px]" data-node-id="6146:19596">
                    Task
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[217px]" data-node-id="6146:19597" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19598">
                  Due Date
                </p>
              </div>
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[217px]" data-node-id="6146:19599" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19600">
                  Related Record
                </p>
              </div>
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[340px]" data-node-id="6146:19601" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19602">
                  Assigned To
                </p>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19603" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:19604" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19605">
                  Today
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6146:19606" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19607">
                    3
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6146:19608" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6146:19609" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19610" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19611" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58318" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58318;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19613">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19614" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19615" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58321" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58321;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19617">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19618" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19619" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58324" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58324;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19621">
                      Design Mockups for Davis Tech
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19622" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19623" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19625" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Late" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19627" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Safe" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19629" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19630" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19631" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19632" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19632;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19632;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19633">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19634" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19635" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19636" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19636;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19636;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19637">
                    BrightCorp
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19638" data-name="Card">
                  <div className="bg-[#4d41f3] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19639" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19640" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19640;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19640;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19641">
                    TechNova
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[162px] items-start relative shrink-0 w-[302px]" data-node-id="6146:19642" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19643" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19644" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19645" data-name="Avatar/Man/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19646">
                      John Cornor
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19647" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19648" data-name="Avatar/Woman/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19649">
                      Emily Davis
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19650" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19651" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19652" data-name="Avatar/Man/4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan4} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19653">
                      John Carter
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19654" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19655" data-name="Avatar/Man/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19656">
                      Brody Brown
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19657" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19658" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19659" data-name="Avatar/Man/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19660">
                      Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6146:19661" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19662" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19663">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19663;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19663;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19664" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19665">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19665;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19665;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19666" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19667">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19667;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19667;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19668" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:19669" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19670">
                  This Week
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6146:19671" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19672">
                    4
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6146:19673" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6146:19674" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19675" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19676" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58327" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58327;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19678">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19679" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19680" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58328" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58328;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19682">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19683" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19684" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58329" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58329;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19686">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19687" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19688" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58330" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58330;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19690">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19691" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19692" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19694" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Safe" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19696" data-name="Card">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="6146:19697" data-name="Task Due Date">
                    <div className="relative shrink-0 size-[6px]" data-node-id="I6146:19697;6155:22604">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse172} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4d81e7] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19697;6155:22605">
                      Due Mar 13
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19698" data-name="Card">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="6146:19699" data-name="Task Due Date">
                    <div className="relative shrink-0 size-[6px]" data-node-id="I6146:19699;6155:22604">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse172} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4d81e7] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6146:19699;6155:22605">
                      Due Mar 15
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19700" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19701" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19702" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19703" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19703;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19703;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19704">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19705" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19706" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19707" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19707;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19707;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19708">
                    BrightCorp
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19709" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19710" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19711" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19711;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19711;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19712">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19713" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19714" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19715" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19715;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19715;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19716">
                    BrightCorp
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[216px] items-start relative shrink-0 w-[302px]" data-node-id="6146:19717" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19718" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19719" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19720" data-name="Avatar/Woman/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6180:59012">
                      Sarah Thompson
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19722" data-name="Avtar">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19723">
                      +3
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19724" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19725" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19726" data-name="Avatar/Man/4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan4} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19727">
                      John Carter
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19728" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19729" data-name="Avatar/Man/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19730">
                      Brody Brown
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19731" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19732" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19733" data-name="Avatar/Man/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19734">
                      John Cornor
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19735" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19736" data-name="Avatar/Man/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19737">
                      Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19738" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19739" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19740" data-name="Avatar/Woman/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19741">
                      Emily Davis
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19742" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19743" data-name="Avatar/Woman/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19744">
                      Lily Alexa
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6146:19745" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19746" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19747">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19747;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19747;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19748" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19749">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19749;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19749;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19750" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19751">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19751;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19751;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19752" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19753">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19753;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19753;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19754" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:19755" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19756">
                  Upcoming
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6146:19757" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19758">
                    2
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6146:19759" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6146:19760" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19761" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19762" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58339" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58339;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19764">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19765" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19766" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58340" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6180:58340;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19768">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19769" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6180:59040" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Safe" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6180:59042" data-name="Card">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="6180:59043" data-name="Task Due Date">
                    <div className="relative shrink-0 size-[6px]" data-node-id="I6180:59043;6155:22604">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse172} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4d81e7] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6180:59043;6155:22605">
                      Due Mar 13
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19774" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19775" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19776" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19777" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19777;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19777;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19778">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19779" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19780" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19781" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19781;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19781;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19782">
                    BrightCorp
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[108px] items-start relative shrink-0 w-[302px]" data-node-id="6146:19783" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19784" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19785" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19786" data-name="Avatar/Man/4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan4} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19787">
                      John Carter
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19788" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19789" data-name="Avatar/Man/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19790">
                      Brody Brown
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19791" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6180:59014" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:59015" data-name="Avatar/Woman/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6180:59016">
                      Sarah Thompson
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19795" data-name="Avtar">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19796">
                      +3
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6146:19797" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19798" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19799">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19799;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19799;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19800" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19801">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19801;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19801;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19802" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:19803" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19804">
                  Completed
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6146:19805" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19806">
                    1
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6146:19807" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6146:19808" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19809" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6146:19810" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6180:58345" data-name="Checklist">
                      <div className="absolute bg-[#4d41f3] inset-0 rounded-[6px]" data-node-id="I6180:58345;6155:22621" data-name="Cheklist / Disable / Light" />
                      <div className="absolute inset-[16.67%]" data-node-id="I6180:58345;6155:22622" data-name="check">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6146:19812">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19813" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19814" data-name="Card">
                  <TaskDueDate className="content-stretch flex gap-[6px] items-center relative shrink-0" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6146:19816" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19817" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6146:19818" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6146:19819" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6146:19819;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6146:19819;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6146:19820">
                    Davis Tech
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[54px] items-start relative shrink-0 w-[302px]" data-node-id="6146:19821" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19822" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6146:19823" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6146:19824" data-name="Avatar/Man/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:19825">
                      Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6146:19826" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6146:19827" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:19828">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6146:19828;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:19828;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center left-[999px] overflow-clip p-[8px] rounded-[12px] shadow-[7px_24px_24px_-7px_rgba(0,0,0,0.25)] top-[91px] w-[141px]" data-node-id="6181:59049" data-name="Popup">
              <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6181:59050" data-name="Add New">
                <div className="relative shrink-0 size-[20px]" data-node-id="6181:59051" data-name="edit-2">
                  <div className="absolute contents inset-0" data-node-id="I6181:59051;3:37087" data-name="vuesax/linear/edit-2">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6181:59051;3:37088" data-name="edit-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit2} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6181:59052">
                  Edit
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6181:59053" data-name="Add New">
                <div className="relative shrink-0 size-[20px]" data-node-id="6181:59054" data-name="send-2">
                  <div className="absolute contents inset-0" data-node-id="I6181:59054;3:29774" data-name="vuesax/linear/send-2">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6181:59054;3:29775" data-name="send-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend2} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6181:59055">
                  Share
                </p>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6181:59056" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6181:59057" data-name="Add New">
                <div className="relative shrink-0 size-[20px]" data-node-id="6181:59058" data-name="trash">
                  <div className="absolute contents inset-0" data-node-id="I6181:59058;3:28733" data-name="vuesax/linear/trash">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6181:59058;3:28734" data-name="trash">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6181:59059">
                  Delete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
