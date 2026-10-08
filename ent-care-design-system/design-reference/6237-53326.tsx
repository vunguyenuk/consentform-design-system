const assetPathPrefix = "https://www.figma.com/api/mcp/asset/f5e214c3-ee48-4e2d-a080-201782fae0f4";
const imgEllipse169 = `${assetPathPrefix}/1ad2a.svg`;
const imgEllipse170 = `${assetPathPrefix}/8a9dd.svg`;
const imgEllipse171 = `${assetPathPrefix}/de2ff.svg`;
const imgEllipse172 = `${assetPathPrefix}/df82e.svg`;
const imgEllipse173 = `${assetPathPrefix}/db478.svg`;
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
const imgSend3 = `${assetPathPrefix}/a9704.svg`;
const imgArrowDown1 = `${assetPathPrefix}/7dfa3.svg`;
const imgLine1 = `${assetPathPrefix}/3b98e.svg`;
const imgLine2 = `${assetPathPrefix}/3d2b9.svg`;

type TaskDueDateProps = {
  className?: string;
  variant?: "Warning" | "Late";
};

function TaskDueDate({ className, variant = "Warning" }: TaskDueDateProps) {
  const isLate = variant === "Late";
  return (
    <div className={className || `content-stretch flex gap-[6px] items-center relative ${isLate ? "" : "justify-center"}`} id={isLate ? "node-6118_18016" : "node-6118_18018"}>
      <div className="relative shrink-0 size-[6px]" id={isLate ? "node-6126_15934" : "node-6126_15927"}>
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isLate ? imgEllipse170 : imgEllipse169} />
      </div>
      <p className={`[word-break:break-word] font-["Inter:Semi_Bold"] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[-0.24px] whitespace-nowrap ${isLate ? "text-[#db2a26]" : "text-[#dba014]"}`} id={isLate ? "node-6118_18006" : "node-6117_17987"}>
        {isLate ? "Due 4 Days ago" : "Due Today"}
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
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isSafeAndOn ? imgEllipse173 : isLateAndOn ? imgEllipse172 : imgEllipse171} />
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

type DTasksPageCreateTaskProps = {
  className?: string;
  responsive?: "No";
};

function DTasksPageCreateTask({ className, responsive = "No" }: DTasksPageCreateTaskProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6237:53326">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6193:47558" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6193:47558;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6193:47558;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6193:47558;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6193:47558;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6193:47558;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6193:47558;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:47558;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6193:47558;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6193:47558;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47558;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6193:47558;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:47558;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6193:47558;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6193:47558;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6193:47558;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6193:47558;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6193:47558;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47558;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6193:47558;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6193:47558;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6193:47558;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:47558;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:47558;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:47558;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47558;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47558;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:47558;6155:48426" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:47558;6155:48426;6155:47829" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48426;6155:47829;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47558;6155:48426;6155:47829;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47558;6155:48426;6155:47830">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:47558;6155:48428" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:47558;6155:48428;6155:47856" data-name="task-square">
                  <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48428;6155:47856;3:36664" data-name="vuesax/linear/task-square">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47558;6155:48428;6155:47856;3:36665" data-name="task-square">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47558;6155:48428;6155:47857">
                  <p className="leading-[1.5]">Tasks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6193:47558;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6193:47558;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6193:47558;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47558;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6193:47558;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6193:47558;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47558;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:47558;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:47558;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:47558;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:47558;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:47558;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47558;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:47558;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:47558;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:47558;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:47558;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47558;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:47558;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:47558;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:47558;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:47558;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:47558;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47558;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:47558;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6193:47558;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:47558;6155:48449" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6193:47559" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6193:47560" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6193:47561">
            <p className="leading-[1.5]">Tasks</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6193:47562" data-name="Buttons">
            <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6193:47563" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="6193:47564" data-name="search-normal">
                <div className="absolute contents inset-0" data-node-id="I6193:47564;3:21503" data-name="vuesax/linear/search-normal">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47564;3:21504" data-name="search-normal">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6193:47565">
                Search Tasks
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6193:47566" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6193:47566;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:47566;6155:20977">
                New Task
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="bg-[#161618] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-node-id="6193:47567" data-name="Table">
          <div className="border-[#252528] border-b border-solid content-stretch flex h-[56px] items-center pr-[24px] relative shrink-0 w-[1180px]" data-node-id="6193:47568" data-name="Tabbing">
            <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip px-[24px] relative" data-node-id="6193:47569" data-name="Tabbing">
              <div className="border-[#796ff7] border-b-3 border-solid content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6193:47569;6155:20856" data-name="Tabbing 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#796ff7] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47569;6155:20857">
                  <p className="leading-[1.5]">List View</p>
                </div>
              </div>
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6193:47569;6155:20858" data-name="Tabbing 2">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:47569;6155:20859">
                  <p className="leading-[1.5]">Kanban</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6193:47570" data-name="Button">
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[142px]" data-node-id="6193:47571" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:47571;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:47571;6155:21045">
                  Import/Export
                </p>
              </div>
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[92px]" data-node-id="6193:47572" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:47572;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:47572;6155:21045">
                  Filter
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1180px]" data-node-id="6193:47573" data-name="Task Main">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="6193:47574" data-name="Table Head">
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[406px]" data-node-id="6193:47575" data-name="Card">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="6193:47576">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#bebec8] text-[12px] tracking-[-0.24px]" data-node-id="6193:47577">
                    Task
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[217px]" data-node-id="6193:47578" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47579">
                  Due Date
                </p>
              </div>
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[217px]" data-node-id="6193:47580" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47581">
                  Related Record
                </p>
              </div>
              <div className="content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-[340px]" data-node-id="6193:47582" data-name="Card">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47583">
                  Assigned To
                </p>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47584" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6193:47585" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47586">
                  Today
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6193:47587" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47588">
                    3
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6193:47589" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6193:47590" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47591" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47592" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47593" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47593;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47594">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47595" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47596" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47597" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47597;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47598">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47599" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47600" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47601" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47601;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47602">
                      Design Mockups for Davis Tech
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47603" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47604" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47606" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Late" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47608" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Safe" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47610" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47611" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47612" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47613" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47613;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47613;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47614">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47615" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47616" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47617" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47617;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47617;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47618">
                    BrightCorp
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47619" data-name="Card">
                  <div className="bg-[#4d41f3] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47620" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47621" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47621;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47621;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47622">
                    TechNova
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[162px] items-start relative shrink-0 w-[302px]" data-node-id="6193:47623" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47624" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47625" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47626" data-name="Avatar/Man/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47627">
                      John Cornor
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47628" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47629" data-name="Avatar/Woman/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47630">
                      Emily Davis
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47631" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47632" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47633" data-name="Avatar/Man/4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan4} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47634">
                      John Carter
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47635" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47636" data-name="Avatar/Man/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47637">
                      Brody Brown
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47638" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47639" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47640" data-name="Avatar/Man/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47641">
                      Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6193:47642" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47643" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47644">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47644;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47644;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47645" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47646">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47646;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47646;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47647" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47648">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47648;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47648;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47649" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6193:47650" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47651">
                  This Week
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6193:47652" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47653">
                    4
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6193:47654" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6193:47655" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47656" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47657" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47658" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47658;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47659">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47660" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47661" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47662" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47662;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47663">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47664" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47665" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47666" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47666;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47667">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47668" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47669" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47670" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47670;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47671">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47672" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47673" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47675" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Safe" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47677" data-name="Card">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="6193:47678" data-name="Task Due Date">
                    <div className="relative shrink-0 size-[6px]" data-node-id="I6193:47678;6155:22604">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse173} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4d81e7] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:47678;6155:22605">
                      Due Mar 13
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47679" data-name="Card">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="6193:47680" data-name="Task Due Date">
                    <div className="relative shrink-0 size-[6px]" data-node-id="I6193:47680;6155:22604">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse173} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4d81e7] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:47680;6155:22605">
                      Due Mar 15
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47681" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47682" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47683" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47684" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47684;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47684;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47685">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47686" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47687" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47688" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47688;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47688;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47689">
                    BrightCorp
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47690" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47691" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47692" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47692;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47692;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47693">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47694" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47695" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47696" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47696;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47696;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47697">
                    BrightCorp
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[216px] items-start relative shrink-0 w-[302px]" data-node-id="6193:47698" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47699" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47700" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47701" data-name="Avatar/Woman/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47702">
                      Sarah Thompson
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47703" data-name="Avtar">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47704">
                      +3
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47705" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47706" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47707" data-name="Avatar/Man/4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan4} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47708">
                      John Carter
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47709" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47710" data-name="Avatar/Man/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47711">
                      Brody Brown
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47712" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47713" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47714" data-name="Avatar/Man/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47715">
                      John Cornor
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47716" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47717" data-name="Avatar/Man/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47718">
                      Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47719" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47720" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47721" data-name="Avatar/Woman/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47722">
                      Emily Davis
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47723" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47724" data-name="Avatar/Woman/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47725">
                      Lily Alexa
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6193:47726" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47727" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47728">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47728;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47728;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47729" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47730">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47730;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47730;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47731" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47732">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47732;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47732;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47733" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47734">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47734;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47734;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47735" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6193:47736" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47737">
                  Upcoming
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6193:47738" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47739">
                    2
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6193:47740" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6193:47741" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47742" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47743" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47744" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47744;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47745">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47746" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47747" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47748" data-name="Checklist">
                      <div className="absolute border border-[#44444a] border-solid inset-0 rounded-[6px]" data-node-id="I6193:47748;6155:22619" data-name="Checklist / Disable / Light" />
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47749">
                      Send Revised Proposal
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47750" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47751" data-name="Card">
                  <TaskDueDate1 className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Safe" />
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47753" data-name="Card">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="6193:47754" data-name="Task Due Date">
                    <div className="relative shrink-0 size-[6px]" data-node-id="I6193:47754;6155:22604">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse173} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4d81e7] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:47754;6155:22605">
                      Due Mar 13
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47755" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47756" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47757" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47758" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47758;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47758;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47759">
                    Davis Tech
                  </p>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47760" data-name="Card">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47761" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47762" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47762;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47762;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47763">
                    BrightCorp
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[108px] items-start relative shrink-0 w-[302px]" data-node-id="6193:47764" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47765" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47766" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47767" data-name="Avatar/Man/4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan4} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47768">
                      John Carter
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47769" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47770" data-name="Avatar/Man/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47771">
                      Brody Brown
                    </p>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[6px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47772" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47773" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47774" data-name="Avatar/Woman/3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman3} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47775">
                      Sarah Thompson
                    </p>
                  </div>
                  <div className="border border-[#252528] border-solid content-stretch flex items-center p-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47776" data-name="Avtar">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47777">
                      +3
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6193:47778" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47779" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47780">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47780;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47780;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47781" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47782">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47782;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47782;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252528] content-stretch flex h-[40px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47783" data-name="Status">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6193:47784" data-name="text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47785">
                  Completed
                </p>
                <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[20px]" data-node-id="6193:47786" data-name="Label">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47787">
                    1
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="6193:47788" data-name="Content">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-node-id="6193:47789" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47790" data-name="Card">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="6193:47791" data-name="Name">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47792" data-name="Checklist">
                      <div className="absolute bg-[#4d41f3] inset-0 rounded-[6px]" data-node-id="I6193:47792;6155:22621" data-name="Cheklist / Disable / Light" />
                      <div className="absolute inset-[16.67%]" data-node-id="I6193:47792;6155:22622" data-name="check">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[1.5] min-w-px not-italic relative text-[14px] text-white tracking-[-0.28px]" data-node-id="6193:47793">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47794" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47795" data-name="Card">
                  <TaskDueDate className="content-stretch flex gap-[6px] items-center relative shrink-0" variant="Late" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-node-id="6193:47797" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex gap-[8px] h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47798" data-name="Card">
                  <div className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[7px] shrink-0 size-[24px]" data-node-id="6193:47799" data-name="btn">
                    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[14px]" data-node-id="6193:47800" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6193:47800;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:47800;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47801">
                    Davis Tech
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[54px] items-start relative shrink-0 w-[302px]" data-node-id="6193:47802" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47803" data-name="Card">
                  <div className="border border-[#252528] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6193:47804" data-name="Avtar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6193:47805" data-name="Avatar/Man/2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan2} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6193:47806">
                      Alex Spencer
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-node-id="6193:47807" data-name="Row">
                <div className="border-[#252528] border-b border-solid content-stretch flex h-[54px] items-center justify-center p-[12px] relative shrink-0 w-full" data-node-id="6193:47808" data-name="Card">
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6193:47809">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6193:47809;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:47809;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#252528] border border-[#44444a] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center left-[999px] overflow-clip p-[8px] rounded-[12px] shadow-[7px_24px_24px_-7px_rgba(0,0,0,0.25)] top-[91px] w-[141px]" data-node-id="6193:47810" data-name="Popup">
              <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6193:47811" data-name="Add New">
                <div className="relative shrink-0 size-[20px]" data-node-id="6193:47812" data-name="edit-2">
                  <div className="absolute contents inset-0" data-node-id="I6193:47812;3:37087" data-name="vuesax/linear/edit-2">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:47812;3:37088" data-name="edit-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit2} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47813">
                  Edit
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6193:47814" data-name="Add New">
                <div className="relative shrink-0 size-[20px]" data-node-id="6193:47815" data-name="send-2">
                  <div className="absolute contents inset-0" data-node-id="I6193:47815;3:29774" data-name="vuesax/linear/send-2">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:47815;3:29775" data-name="send-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend2} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47816">
                  Share
                </p>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="6193:47817" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center p-[8px] relative shrink-0 w-full" data-node-id="6193:47818" data-name="Add New">
                <div className="relative shrink-0 size-[20px]" data-node-id="6193:47819" data-name="trash">
                  <div className="absolute contents inset-0" data-node-id="I6193:47819;3:28733" data-name="vuesax/linear/trash">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:47819;3:28734" data-name="trash">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:47820">
                  Delete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col h-[900px] items-center justify-center left-0 overflow-clip p-[10px] top-0 w-[1440px]" data-node-id="6193:47821" data-name="Popup">
        <div className="bg-[#252528] content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-[792px]" data-node-id="6193:47822" data-name="Modal">
          <div className="border-[#44444a] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6193:47823" data-name="Head">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-px not-italic relative text-[18px] text-white tracking-[-0.36px]" data-node-id="6193:47824">
              Create Task
            </p>
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6193:47825" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6193:47825;6155:21004" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend3} />
              </div>
            </div>
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6193:47826" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6193:47826;6155:21004" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend3} />
              </div>
            </div>
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6193:47827" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6193:47827;6155:21004" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend3} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start px-[80px] py-[48px] relative shrink-0 w-full" data-node-id="6193:47828" data-name="Main">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6193:47829" data-name="Headline">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-node-id="6193:48275" data-name="Status">
                <TaskDueDate className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
                <div className="relative shrink-0 size-[14px]" data-node-id="6193:48269" data-name="arrow-down">
                  <div className="absolute contents inset-0" data-node-id="I6193:48269;3:11318" data-name="vuesax/linear/arrow-down">
                    <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:48269;3:11319" data-name="arrow-down">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#44444a] text-[24px] tracking-[-0.72px] w-[min-content]" data-node-id="6193:47831">
                Untitled Task
              </p>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6193:47832" data-name="Other">
                <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[234px]" data-node-id="6193:48572" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6193:48572;6155:21044" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:48572;6155:21045">
                    Select Company/ Organisation
                  </p>
                </div>
                <div className="h-[27px] relative shrink-0 w-0" data-node-id="6193:47836" data-name="Line">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgLine1} />
                  </div>
                </div>
                <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[102px]" data-node-id="6193:48573" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I6193:48573;6155:21044" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:48573;6155:21045">
                    Assign
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6193:47844" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[306px] items-start justify-between relative shrink-0 w-full" data-node-id="6193:50946" data-name="Desc">
              <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium'] font-medium gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:50947" data-name="Start">
                <p className="relative shrink-0 text-[#5b5a64]" data-node-id="6193:50948">
                  Start typing or
                </p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 text-white underline" data-node-id="6193:50949">
                  Select a Template
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="6193:50950" data-name="Buttons">
                <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[154px]" data-node-id="6193:50951" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:50951;6155:21045">
                    View All Template
                  </p>
                </div>
                <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[174px]" data-node-id="6193:50952" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6193:50952;6155:21045">
                    Create a new template
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[#44444a] border-solid border-t content-stretch flex gap-[12px] items-center justify-end p-[24px] relative shrink-0 w-full" data-node-id="6193:50960" data-name="Buttons">
            <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6193:50961" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:50961;6155:21005">
                Cancel
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6193:50962" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:50962;6155:20997">
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
