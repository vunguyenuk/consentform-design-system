const assetPathPrefix = "https://www.figma.com/api/mcp/asset/ebd10528-6e6b-47cd-8884-e8f1e458d2ba";
const imgBuilding3 = `${assetPathPrefix}/1632e.svg`;
const imgEllipse169 = `${assetPathPrefix}/1ad2a.svg`;
const imgAvatarMan1 = `${assetPathPrefix}/dd1fe.png`;
const imgAvatarWoman1 = `${assetPathPrefix}/e235c.png`;
const imgMore = `${assetPathPrefix}/d370e.svg`;
const imgLine = `${assetPathPrefix}/92d52.svg`;
const imgCategory2 = `${assetPathPrefix}/165b9.svg`;
const imgNotification = `${assetPathPrefix}/a31fd.svg`;
const imgNote = `${assetPathPrefix}/46e76.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/7a272.svg`;
const imgSetting = `${assetPathPrefix}/ca8b3.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
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
const imgMore1 = `${assetPathPrefix}/95bac.svg`;
const imgEllipse170 = `${assetPathPrefix}/8a9dd.svg`;
const imgEllipse171 = `${assetPathPrefix}/c1e45.svg`;

type CompanyIconProps = {
  className?: string;
  variant?: "1";
};

function CompanyIcon({ className, variant = "1" }: CompanyIconProps) {
  return (
    <div className={className || "bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] size-[24px]"} data-node-id="6155:20578">
      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="6155:20579" data-name="building-3">
        <div className="absolute contents inset-0" data-node-id="I6155:20579;3:22442" data-name="vuesax/bold/building-3">
          <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6155:20579;3:22443" data-name="building-3">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
          </div>
        </div>
      </div>
    </div>
  );
}

type TaskDueDateProps = {
  className?: string;
  darkmode?: "Off";
  variant?: "Warning";
};

function TaskDueDate({ className, darkmode = "Off", variant = "Warning" }: TaskDueDateProps) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center justify-center relative"} data-node-id="6155:21290">
      <div className="relative shrink-0 size-[6px]" data-node-id="6155:21291">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse169} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dba014] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6155:21292">
        Due Today
      </p>
    </div>
  );
}

type AllCardProps = {
  className?: string;
  companyName?: string;
  darkmode?: "On";
  taskName?: string;
  typeCard?: "Tasks";
};

function AllCard({ className, companyName = "Davis Tech", darkmode = "On", taskName = "Follow-up New Call with Alex Spencer about Project", typeCard = "Tasks" }: AllCardProps) {
  return (
    <div className={className || "bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] w-[239px]"} data-node-id="6155:56922">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6155:56923" data-name="Name">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6155:56924" data-name="Deadline">
          <TaskDueDate className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6155:56926">
            <div className="-rotate-90 flex-none">
              <div className="relative size-[16px]" data-name="more">
                <div className="absolute contents inset-0" data-node-id="I6155:56926;3:34106" data-name="vuesax/linear/more">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:56926;3:34107" data-name="more">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] w-full" data-node-id="6155:56927">
          {taskName}
        </p>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-node-id="6155:56928" data-name="Line">
        <div className="absolute inset-[-0.5px_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine} />
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6155:56929" data-name="More">
        <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[12px] text-white tracking-[-0.24px]" data-node-id="6155:56931">
          {companyName}
        </p>
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="6155:56932" data-name="Avatar">
          <div className="border border-[#252528] border-solid mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="6155:56933" data-name="Avatar/Man/1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
          </div>
          <div className="border border-[#252528] border-solid relative rounded-[100px] shrink-0 size-[18px]" data-node-id="6155:56934" data-name="Avatar/Woman/1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
          </div>
        </div>
      </div>
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

type DTasksPageKanbanViewProps = {
  className?: string;
  responsive?: "No";
};

function DTasksPageKanbanView({ className, responsive = "No" }: DTasksPageKanbanViewProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6237:53283">
      <div className="bg-[#020408] border-[#252528] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6181:59751" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6181:59751;6155:48409" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6181:59751;6155:48410" data-name="Company">
            <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-node-id="I6181:59751;6155:48411" data-name="logo">
              <div className="border-[0.693px] border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[5px] shadow-[0px_4.85px_6.929px_-4.158px_black,0px_0px_0px_1.386px_rgba(190,202,234,0.03)] shrink-0 size-[27.717px]" data-node-id="I6181:59751;6155:48411;20:1732" data-name="Logo">
                <div aria-hidden className="absolute bg-[#111113] inset-0 pointer-events-none rounded-[5px]" />
                <div className="absolute flex h-[44.542px] items-center justify-center left-[-7.21px] top-[-17.87px] w-[44.176px]" data-node-id="I6181:59751;6155:48411;20:1733">
                  <div className="-scale-y-100 flex-none rotate-30">
                    <div className="h-[32.972px] relative w-[31.973px]">
                      <div className="absolute inset-[-4.2%_-7.71%_-10.51%_-7.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[20px] top-[calc(50%+0.14px)]" data-node-id="I6181:59751;6155:48411;6004:52006" data-name="user-octagon">
                  <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48411;6004:52006;3:13119" data-name="vuesax/bold/user-octagon">
                    <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6181:59751;6155:48411;6004:52006;3:13120" data-name="user-octagon">
                      <div className="absolute inset-[0_-6.38%_-84.17%_-43.33%]">
                        <img alt="" className="block max-w-none size-full" src={imgUserOctagon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.772px_6.929px_0px_rgba(255,255,255,0.11)]" />
              </div>
              <p className="[word-break:break-word] font-['Manrope:ExtraBold'] font-extrabold leading-[1.3] relative shrink-0 text-[16.212px] text-white tracking-[-0.6485px] whitespace-nowrap" data-node-id="I6181:59751;6155:48411;20:1850">
                Cliently
              </p>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="I6181:59751;6155:48412" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48412;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6181:59751;6155:48412;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6181:59751;6155:48413" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48413;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6181:59751;6155:48413;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6181:59751;6155:48414" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6181:59751;6155:48416" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis text-white tracking-[-0.24px]" data-node-id="I6181:59751;6155:48417">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#bebec8] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6181:59751;6155:48418">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6181:59751;6155:48419" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48419;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6181:59751;6155:48419;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6181:59751;6155:48420" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6181:59751;6155:48421" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6181:59751;6155:48422">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6181:59751;6155:48423" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6181:59751;6155:48424" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6181:59751;6155:48424;6155:47823" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48424;6155:47823;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6181:59751;6155:48424;6155:47823;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:59751;6155:48424;6155:47824">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6181:59751;6155:48426" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6181:59751;6155:48426;6155:47829" data-name="message-text">
                  <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48426;6155:47829;3:14650" data-name="vuesax/linear/message-text">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6181:59751;6155:48426;6155:47829;3:14651" data-name="message-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageText} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:59751;6155:48426;6155:47830">
                  <p className="leading-[1.5]">Emails</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <div className="bg-[#252528] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6181:59751;6155:48428" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6181:59751;6155:48428;6155:47856" data-name="task-square">
                  <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48428;6155:47856;3:36664" data-name="vuesax/linear/task-square">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6181:59751;6155:48428;6155:47856;3:36665" data-name="task-square">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:59751;6155:48428;6155:47857">
                  <p className="leading-[1.5]">Tasks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6181:59751;6155:48429" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6181:59751;6155:48430">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6181:59751;6155:48431" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48431;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6181:59751;6155:48431;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6181:59751;6155:48432">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6181:59751;6155:48433" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48433;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6181:59751;6155:48433;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6181:59751;6155:48434">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6181:59751;6155:48435" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6181:59751;6155:48436" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6181:59751;6155:48437" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48437;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6181:59751;6155:48437;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:59751;6155:48438">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6181:59751;6155:48439" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6181:59751;6155:48440" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6181:59751;6155:48441" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48441;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6181:59751;6155:48441;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:59751;6155:48442">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6181:59751;6155:48443" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6181:59751;6155:48444" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6181:59751;6155:48445" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6181:59751;6155:48445;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6181:59751;6155:48445;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:59751;6155:48446">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6181:59751;6155:48447" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6181:59751;6155:48448">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6181:59751;6155:48449" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#161618] content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6146:21002" data-name="Main">
        <div className="bg-[#161618] border-[#252528] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6181:60448" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap" data-node-id="6181:60449">
            <p className="leading-[1.5]">Tasks</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6181:60450" data-name="Buttons">
            <div className="bg-[#252528] border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6181:60451" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="6181:60452" data-name="search-normal">
                <div className="absolute contents inset-0" data-node-id="I6181:60452;3:21503" data-name="vuesax/linear/search-normal">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6181:60452;3:21504" data-name="search-normal">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6181:60453">
                Search Tasks
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6181:60454" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6181:60454;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6181:60454;6155:20977">
                New Task
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-node-id="6146:21011" data-name="Table">
          <div className="border-[#252528] border-b border-solid content-stretch flex h-[56px] items-center pr-[24px] relative shrink-0 w-[1180px]" data-node-id="6181:60465" data-name="Tabbing">
            <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip px-[24px] relative" data-node-id="6181:60466" data-name="Tabbing">
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6181:60466;6155:20865" data-name="Tabbing 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:60466;6155:20866">
                  <p className="leading-[1.5]">List View</p>
                </div>
              </div>
              <div className="border-[#796ff7] border-b-3 border-solid content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6181:60466;6155:20867" data-name="Tabbing 2">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#796ff7] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6181:60466;6155:20868">
                  <p className="leading-[1.5]">Kanban</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6181:60467" data-name="Button">
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[142px]" data-node-id="6181:60468" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6181:60468;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6181:60468;6155:21045">
                  Import/Export
                </p>
              </div>
              <div className="border border-[#44444a] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[92px]" data-node-id="6181:60469" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(32, 32, 35) 0%, rgb(32, 32, 35) 100%)" }} data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6181:60469;6155:21044" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6181:60469;6155:21045">
                  Filter
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px p-[24px] relative w-full" data-node-id="6146:21017" data-name="Kanban">
            <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="6146:21018" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6146:21019" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:21020" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21021">
                    Today
                  </p>
                  <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6146:21022" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21023">
                      3
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:21024">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6146:21024;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21024;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6181:62547" data-name="Cards">
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" taskName="Send Revised Proposal" />
                <div className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6181:62549" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6181:62549;6155:56923" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6181:62549;6155:56924" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6181:62549;6155:56925" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6181:62549;6155:56925;6155:21294">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse170} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#db2a26] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6181:62549;6155:56925;6155:21295">
                          Due 4 Days ago
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6181:62549;6155:56926">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6181:62549;6155:56926;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6181:62549;6155:56926;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] w-full" data-node-id="I6181:62549;6155:56927">
                      Send Revised Proposal
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6181:62549;6155:56928" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6181:62549;6155:56929" data-name="More">
                    <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[12px] text-white tracking-[-0.24px]" data-node-id="I6181:62549;6155:56931">
                      BrightCorp
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6181:62549;6155:56932" data-name="Avatar">
                      <div className="border border-[#252528] border-solid mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6181:62549;6155:56933" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-[#252528] border-solid relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6181:62549;6155:56934" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6181:62550" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6181:62550;6155:56923" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6181:62550;6155:56924" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6181:62550;6155:56925" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6181:62550;6155:56925;6155:21297">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6181:62550;6155:56925;6155:21298">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6181:62550;6155:56926">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6181:62550;6155:56926;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6181:62550;6155:56926;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.28px] w-full" data-node-id="I6181:62550;6155:56927">
                      Design Mockups for Davis Tech
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6181:62550;6155:56928" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6181:62550;6155:56929" data-name="More">
                    <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[12px] text-white tracking-[-0.24px]" data-node-id="I6181:62550;6155:56931">
                      TechNova
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6181:62550;6155:56932" data-name="Avatar">
                      <div className="border border-[#252528] border-solid mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6181:62550;6155:56933" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-[#252528] border-solid relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6181:62550;6155:56934" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col gap-[16px] h-full items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0" data-node-id="6146:21029" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6146:21030" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:21031" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21032">
                    This Week
                  </p>
                  <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6146:21033" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21034">
                      4
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:21035">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6146:21035;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21035;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="6146:21036" data-name="Cards">
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" taskName="Follow-up Call with Alex Spencer" />
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" companyName="BrightCorp" taskName="Send Revised Proposal" />
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" taskName="Follow-up Call with Alex Spencer" />
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" companyName="BrightCorp" taskName="Send Revised Proposal" />
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="6146:21041" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6146:21042" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:21043" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21044">
                    Upcoming
                  </p>
                  <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6146:21045" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21046">
                      2
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:21047">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6146:21047;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21047;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6146:21048" data-name="Cards">
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" taskName="Follow-up Call with Alex Spencer" />
                <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" companyName="BrightCorp" taskName="Send Revised Proposal" />
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="6146:21051" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6146:21052" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6146:21053" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21054">
                    Completed
                  </p>
                  <div className="bg-[#5b5a64] border border-[#44444a] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6146:21055" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="6146:21056">
                      1
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6146:21057">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6146:21057;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6146:21057;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AllCard className="bg-[#252528] border border-[#252528] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" companyName="BrightCorp" taskName="Send Revised Proposal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
