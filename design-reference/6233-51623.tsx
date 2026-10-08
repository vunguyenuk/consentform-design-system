const assetPathPrefix = "https://www.figma.com/api/mcp/asset/b0f5deba-712d-4715-aef8-3de836e993c1";
const imgBuilding3 = `${assetPathPrefix}/1632e.svg`;
const imgEllipse169 = `${assetPathPrefix}/1ad2a.svg`;
const imgAvatarMan1 = `${assetPathPrefix}/dd1fe.png`;
const imgAvatarWoman1 = `${assetPathPrefix}/e235c.png`;
const imgMore = `${assetPathPrefix}/95bac.svg`;
const imgLine = `${assetPathPrefix}/4fe14.svg`;
const imgNotification = `${assetPathPrefix}/c6c0e.svg`;
const imgMessageText = `${assetPathPrefix}/7fdbf.svg`;
const imgNote = `${assetPathPrefix}/3a1a9.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/3df1b.svg`;
const imgSetting = `${assetPathPrefix}/7bba3.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/749f8.svg`;
const imgSidebarLeft = `${assetPathPrefix}/6ebdb.svg`;
const imgCategory2 = `${assetPathPrefix}/5b16d.svg`;
const imgTaskSquare = `${assetPathPrefix}/c1273.svg`;
const imgArrowDown1 = `${assetPathPrefix}/71b71.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSearchNormal = `${assetPathPrefix}/11207.svg`;
const imgPlus = `${assetPathPrefix}/3dab3.svg`;
const imgExport = `${assetPathPrefix}/5e44d.svg`;
const imgEllipse170 = `${assetPathPrefix}/8a9dd.svg`;
const imgEllipse171 = `${assetPathPrefix}/c1e45.svg`;
const imgSend2 = `${assetPathPrefix}/fc18d.svg`;
const imgLine1 = `${assetPathPrefix}/9fcbb.svg`;
const imgLine2 = `${assetPathPrefix}/a45e4.svg`;
const imgCheck = `${assetPathPrefix}/42fed.svg`;

type CompanyIconProps = {
  className?: string;
  variant?: "1";
};

function CompanyIcon({ className, variant = "1" }: CompanyIconProps) {
  return (
    <div className={className || "bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[7px] size-[24px]"} data-node-id="6116:17894">
      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="6116:17822" data-name="building-3">
        <div className="absolute contents inset-0" data-node-id="I6116:17822;3:22442" data-name="vuesax/bold/building-3">
          <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6116:17822;3:22443" data-name="building-3">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
          </div>
        </div>
      </div>
    </div>
  );
}

type TaskDueDateProps = {
  className?: string;
  variant?: "Warning";
};

function TaskDueDate({ className, variant = "Warning" }: TaskDueDateProps) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center justify-center relative"} data-node-id="6118:18018">
      <div className="relative shrink-0 size-[6px]" data-node-id="6126:15927">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse169} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dba014] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6117:17987">
        Due Today
      </p>
    </div>
  );
}

type AllCardProps = {
  className?: string;
  companyName?: string;
  taskName?: string;
  typeCard?: "Tasks";
};

function AllCard({ className, companyName = "Davis Tech", taskName = "Follow-up New Call with Alex Spencer about Project", typeCard = "Tasks" }: AllCardProps) {
  return (
    <div className={className || "bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] w-[239px]"} data-node-id="6116:17809">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6116:17807" data-name="Name">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6116:17686" data-name="Deadline">
          <TaskDueDate className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6116:17790">
            <div className="-rotate-90 flex-none">
              <div className="relative size-[16px]" data-name="more">
                <div className="absolute contents inset-0" data-node-id="I6116:17790;3:34106" data-name="vuesax/linear/more">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6116:17790;3:34107" data-name="more">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="6116:17689">
          {taskName}
        </p>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-node-id="6116:17690" data-name="Line">
        <div className="absolute inset-[-0.5px_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine} />
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6116:17691" data-name="More">
        <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6116:17695">
          {companyName}
        </p>
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="6116:17696" data-name="Avatar">
          <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="6116:17697" data-name="Avatar/Man/1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
          </div>
          <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="6116:17698" data-name="Avatar/Woman/1">
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
  darkmode?: "Off";
  menu?: "Help & Center" | "Settings" | "Notifications" | "Emails" | "Notes";
};

function NavMenu({ className, active = false, darkmode = "Off", menu = "Notifications" }: NavMenuProps) {
  const isEmailsAndFalseAndOff = menu === "Emails" && !active && darkmode === "Off";
  const isHelpCenterAndFalseAndOff = menu === "Help & Center" && !active && darkmode === "Off";
  const isNotesAndFalseAndOff = menu === "Notes" && !active && darkmode === "Off";
  const isNotificationsAndFalseAndOff = menu === "Notifications" && !active && darkmode === "Off";
  const isSettingsAndFalseAndOff = menu === "Settings" && !active && darkmode === "Off";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isSettingsAndFalseAndOff ? "node-6155_21335" : isHelpCenterAndFalseAndOff ? "node-6155_21332" : isNotesAndFalseAndOff ? "node-6155_21326" : isEmailsAndFalseAndOff ? "node-6155_21323" : "node-6155_21320"}>
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

type LTasksPageTaskDetailsProps = {
  className?: string;
  responsive?: "No";
};

function LTasksPageTaskDetails({ className, responsive = "No" }: LTasksPageTaskDetailsProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:51623">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6126:18895" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18895;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6126:18895;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6126:18895;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6126:18895;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6126:18895;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6126:18895;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6126:18895;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6126:18895;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6126:18895;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6126:18895;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6126:18895;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6126:18895;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6126:18895;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6126:18895;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6126:18895;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18895;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6126:18895;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6126:18895;6155:48318;4009:131742" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:48318;4009:131742;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18895;6155:48318;4009:131742;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18895;6155:48318;4009:131750">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6126:18895;6155:48321" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6126:18895;6155:48321;4009:132165" data-name="task-square">
                  <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:48321;4009:132165;3:36664" data-name="vuesax/linear/task-square">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18895;6155:48321;4009:132165;3:36665" data-name="task-square">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18895;6155:48321;4009:132166">
                  <p className="leading-[1.5]">Tasks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6126:18895;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6126:18895;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6126:18895;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6126:18895;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18895;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6126:18895;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6126:18895;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18895;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6126:18895;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6126:18895;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6126:18895;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6126:18895;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18895;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6126:18895;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6126:18895;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6126:18895;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6126:18895;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18895;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6126:18895;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6126:18895;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6126:18895;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6126:18895;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6126:18895;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18895;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18895;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6126:18895;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18895;6155:47561" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6126:18896" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6126:18897" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6126:18898">
            <p className="leading-[1.5]">Tasks</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="6126:18899" data-name="Buttons">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6126:18900" data-name="Buttons">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6126:18901" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="6126:18902" data-name="search-normal">
                  <div className="absolute contents inset-0" data-node-id="I6126:18902;3:21503" data-name="vuesax/linear/search-normal">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18902;3:21504" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6126:18903">
                  Search Tasks
                </p>
              </div>
              <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[107px]" data-node-id="6126:18904" data-name="Button">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
                <div className="relative shrink-0 size-[16px]" data-node-id="I6126:18904;6155:20976" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18904;6155:20977">
                  New Task
                </p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-node-id="6126:18905" data-name="Table">
          <div className="border-[#e5e5ec] border-b border-solid content-stretch flex h-[56px] items-center pr-[24px] relative shrink-0 w-[1180px]" data-node-id="6126:18906" data-name="Tabbing">
            <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip px-[24px] relative" data-node-id="6126:18907" data-name="Tabbing">
              <div className="content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6126:18907;6155:20829" data-name="Tabbing 1">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18907;6155:20830">
                  <p className="leading-[1.5]">List View</p>
                </div>
              </div>
              <div className="border-[#4d41f3] border-b-3 border-solid content-stretch flex h-full items-center justify-center px-[16px] relative shrink-0" data-node-id="I6126:18907;6155:20831" data-name="Tabbing 2">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4d41f3] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6126:18907;6155:20832">
                  <p className="leading-[1.5]">Kanban</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6126:18908" data-name="Button">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[142px]" data-node-id="6126:18909" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6126:18909;6155:20984" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExport} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18909;6155:20985">
                  Import/Export
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[92px]" data-node-id="6126:18910" data-name="Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6126:18910;6155:20984" data-name="plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExport} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18910;6155:20985">
                  Filter
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px p-[24px] relative w-full" data-node-id="6126:18911" data-name="Kanban">
            <div className="bg-[#f9f9fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="6126:18912" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6126:18913" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6126:18914" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18915">
                    Today
                  </p>
                  <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6126:18916" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18917">
                      3
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6126:18918">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6126:18918;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18918;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6126:18919" data-name="Cards">
                <AllCard className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" />
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18921" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18921;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18921;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18921;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18921;6118:18023;6126:15934">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse170} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#db2a26] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18921;6118:18023;6118:18006">
                          Due 4 Days ago
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18921;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18921;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18921;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18921;6116:17689">
                      Send Revised Proposal
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18921;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18921;6116:17691" data-name="More">
                    <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" data-node-id="I6126:18921;6117:17977" data-name="Company Icon">
                      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="I6126:18921;6117:17977;6116:17826" data-name="building-3">
                        <div className="absolute contents inset-0" data-node-id="I6126:18921;6117:17977;6116:17826;3:22442" data-name="vuesax/bold/building-3">
                          <div className="absolute inset-[0_-128.57%_-128.57%_0]" data-node-id="I6126:18921;6117:17977;6116:17826;3:22443" data-name="building-3">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18921;6116:17695">
                      BrightCorp
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18921;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18921;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18921;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18922" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18922;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18922;6116:17686" data-name="Deadline">
                      <TaskDueDate className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18922;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18922;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18922;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18922;6116:17689">
                      Design Mockups for Davis Tech
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18922;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18922;6116:17691" data-name="More">
                    <div className="bg-[#3f8d13] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" data-node-id="I6126:18922;6117:17977" data-name="Company Icon">
                      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="I6126:18922;6117:17977;6116:17834" data-name="building-3">
                        <div className="absolute contents inset-0" data-node-id="I6126:18922;6117:17977;6116:17834;3:22442" data-name="vuesax/bold/building-3">
                          <div className="absolute inset-[0_-128.57%_-128.57%_0]" data-node-id="I6126:18922;6117:17977;6116:17834;3:22443" data-name="building-3">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18922;6116:17695">
                      TechNova
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18922;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18922;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18922;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex flex-col gap-[16px] h-full items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0" data-node-id="6126:18923" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6126:18924" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6126:18925" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18926">
                    This Week
                  </p>
                  <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6126:18927" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18928">
                      4
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6126:18929">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6126:18929;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18929;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="6126:18930" data-name="Cards">
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18931" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18931;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18931;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18931;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18931;6118:18023;6126:15940">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18931;6118:18023;6118:18014">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18931;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18931;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18931;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18931;6116:17689">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18931;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18931;6116:17691" data-name="More">
                    <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18931;6116:17695">
                      Davis Tech
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18931;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18931;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18931;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18932" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18932;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18932;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18932;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18932;6118:18023;6126:15940">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18932;6118:18023;6118:18014">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18932;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18932;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18932;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18932;6116:17689">
                      Send Revised Proposal
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18932;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18932;6116:17691" data-name="More">
                    <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" data-node-id="I6126:18932;6117:17977" data-name="Company Icon">
                      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="I6126:18932;6117:17977;6116:17826" data-name="building-3">
                        <div className="absolute contents inset-0" data-node-id="I6126:18932;6117:17977;6116:17826;3:22442" data-name="vuesax/bold/building-3">
                          <div className="absolute inset-[0_-128.57%_-128.57%_0]" data-node-id="I6126:18932;6117:17977;6116:17826;3:22443" data-name="building-3">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18932;6116:17695">
                      BrightCorp
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18932;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18932;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18932;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18933" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18933;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18933;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18933;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18933;6118:18023;6126:15940">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18933;6118:18023;6118:18014">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18933;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18933;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18933;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18933;6116:17689">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18933;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18933;6116:17691" data-name="More">
                    <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18933;6116:17695">
                      Davis Tech
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18933;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18933;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18933;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18934" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18934;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18934;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18934;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18934;6118:18023;6126:15940">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18934;6118:18023;6118:18014">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18934;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18934;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18934;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18934;6116:17689">
                      Send Revised Proposal
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18934;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18934;6116:17691" data-name="More">
                    <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" data-node-id="I6126:18934;6117:17977" data-name="Company Icon">
                      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="I6126:18934;6117:17977;6116:17826" data-name="building-3">
                        <div className="absolute contents inset-0" data-node-id="I6126:18934;6117:17977;6116:17826;3:22442" data-name="vuesax/bold/building-3">
                          <div className="absolute inset-[0_-128.57%_-128.57%_0]" data-node-id="I6126:18934;6117:17977;6116:17826;3:22443" data-name="building-3">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18934;6116:17695">
                      BrightCorp
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18934;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18934;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18934;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="6126:18935" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6126:18936" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6126:18937" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18938">
                    Upcoming
                  </p>
                  <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6126:18939" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18940">
                      2
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6126:18941">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6126:18941;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18941;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="6126:18942" data-name="Cards">
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18943" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18943;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18943;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18943;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18943;6118:18023;6126:15940">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18943;6118:18023;6118:18014">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18943;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18943;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18943;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18943;6116:17689">
                      Follow-up Call with Alex Spencer
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18943;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18943;6116:17691" data-name="More">
                    <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" />
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18943;6116:17695">
                      Davis Tech
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18943;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18943;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18943;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18944" data-name="All Card">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18944;6116:17807" data-name="Name">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18944;6116:17686" data-name="Deadline">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18944;6118:18023" data-name="Task Due Date">
                        <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18944;6118:18023;6126:15940">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse171} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2649a6] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18944;6118:18023;6118:18014">
                          Due Mar 12
                        </p>
                      </div>
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18944;6116:17790">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="more">
                            <div className="absolute contents inset-0" data-node-id="I6126:18944;6116:17790;3:34106" data-name="vuesax/linear/more">
                              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18944;6116:17790;3:34107" data-name="more">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18944;6116:17689">
                      Send Revised Proposal
                    </p>
                  </div>
                  <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18944;6116:17690" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18944;6116:17691" data-name="More">
                    <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" data-node-id="I6126:18944;6117:17977" data-name="Company Icon">
                      <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="I6126:18944;6117:17977;6116:17826" data-name="building-3">
                        <div className="absolute contents inset-0" data-node-id="I6126:18944;6117:17977;6116:17826;3:22442" data-name="vuesax/bold/building-3">
                          <div className="absolute inset-[0_-128.57%_-128.57%_0]" data-node-id="I6126:18944;6117:17977;6116:17826;3:22443" data-name="building-3">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18944;6116:17695">
                      BrightCorp
                    </p>
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18944;6116:17696" data-name="Avatar">
                      <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18944;6116:17697" data-name="Avatar/Man/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                      </div>
                      <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18944;6116:17698" data-name="Avatar/Woman/1">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f9f9fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="6126:18945" data-name="Tasks">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="6126:18946" data-name="Head">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="6126:18947" data-name="text">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#44444a] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18948">
                    Completed
                  </p>
                  <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex h-[20px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[18px]" data-node-id="6126:18949" data-name="Label">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] text-center tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:18950">
                      1
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6126:18951">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[16px]" data-name="more">
                      <div className="absolute contents inset-0" data-node-id="I6126:18951;3:34106" data-name="vuesax/linear/more">
                        <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18951;3:34107" data-name="more">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#f3f4f6] border-b border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[239px]" data-node-id="6126:18952" data-name="All Card">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6126:18952;6116:17807" data-name="Name">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6126:18952;6116:17686" data-name="Deadline">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I6126:18952;6118:18023" data-name="Task Due Date">
                      <div className="relative shrink-0 size-[6px]" data-node-id="I6126:18952;6118:18023;6126:15934">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse170} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#db2a26] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="I6126:18952;6118:18023;6118:18006">
                        Due 4 Days ago
                      </p>
                    </div>
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="I6126:18952;6116:17790">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]" data-name="more">
                          <div className="absolute contents inset-0" data-node-id="I6126:18952;6116:17790;3:34106" data-name="vuesax/linear/more">
                            <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6126:18952;6116:17790;3:34107" data-name="more">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] w-full" data-node-id="I6126:18952;6116:17689">
                    Send Revised Proposal
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="I6126:18952;6116:17690" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I6126:18952;6116:17691" data-name="More">
                  <div className="bg-[#ff4935] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[18px]" data-node-id="I6126:18952;6117:17977" data-name="Company Icon">
                    <div className="-translate-y-1/2 absolute aspect-[12/12] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] left-[calc(20.83%-0.58px)] right-[calc(20.83%-0.58px)] top-1/2" data-node-id="I6126:18952;6117:17977;6116:17826" data-name="building-3">
                      <div className="absolute contents inset-0" data-node-id="I6126:18952;6117:17977;6116:17826;3:22442" data-name="vuesax/bold/building-3">
                        <div className="absolute inset-[0_-128.57%_-128.57%_0]" data-node-id="I6126:18952;6117:17977;6116:17826;3:22443" data-name="building-3">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBuilding3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="I6126:18952;6116:17695">
                    BrightCorp
                  </p>
                  <div className="content-stretch flex items-start relative shrink-0" data-node-id="I6126:18952;6116:17696" data-name="Avatar">
                    <div className="border border-solid border-white mr-[-4px] relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18952;6116:17697" data-name="Avatar/Man/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                    </div>
                    <div className="border border-solid border-white relative rounded-[100px] shrink-0 size-[18px]" data-node-id="I6126:18952;6116:17698" data-name="Avatar/Woman/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col h-[900px] items-center justify-center left-0 overflow-clip p-[10px] top-0 w-[1440px]" data-node-id="6126:19949" data-name="Popup">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-[792px]" data-node-id="6126:19950" data-name="Modal">
          <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6126:19951" data-name="Head">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-px not-italic relative text-[#252528] text-[18px] tracking-[-0.36px]" data-node-id="6126:19952">
              Task Details
            </p>
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6181:64636" data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6181:64636;6155:20944" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend2} />
              </div>
            </div>
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6181:64637" data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6181:64637;6155:20944" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend2} />
              </div>
            </div>
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6181:64638" data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6181:64638;6155:20944" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSend2} />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[80px] py-[48px] relative shrink-0 w-full" data-node-id="6126:19955" data-name="Main">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6126:20160" data-name="Headline">
              <TaskDueDate className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#161618] text-[24px] tracking-[-0.72px] w-[min-content]" data-node-id="6126:20092">
                Follow-up New Call with Alex Spencer about Project
              </p>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="6126:20129" data-name="Other">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6126:20146" data-name="Company">
                  <CompanyIcon className="bg-[#252528] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[5px] shrink-0 size-[24px]" />
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6126:20149">
                    Davis Tech
                  </p>
                </div>
                <div className="h-[27px] relative shrink-0 w-0" data-node-id="6126:20157" data-name="Line">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgLine1} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6126:20159" data-name="Assign">
                  <div className="border border-[#e5e5ec] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6126:20130" data-name="Avatar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6126:20131" data-name="Avatar/Man/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarMan1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:20132">
                      John Cornor
                    </p>
                  </div>
                  <div className="border border-[#e5e5ec] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[20px] shrink-0" data-node-id="6126:20133" data-name="Avatar">
                    <div className="relative shrink-0 size-[18px]" data-node-id="6126:20134" data-name="Avatar/Woman/1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="18" src={imgAvatarWoman1} width="18" />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6126:20135">
                      Emily Davis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6126:19988" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6126:20176" data-name="Desc">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-full" data-node-id="6126:20175">
                Update the initial proposal based on TechNova’s feedback from the March 20 call. Include the optional add-ons (analytics module, priority support, extended API access), quarterly billing option, and updated pricing with 12-month commitment discount. Include 2 mockups of custom dashboards for departmental reporting, as discussed.
              </p>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6126:20187" data-name="List">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6126:20182" data-name="Checklist">
                  <div className="relative shrink-0 size-[20px]" data-node-id="6126:20180" data-name="Checklist">
                    <div className="absolute bg-[#392fd0] inset-0 rounded-[6px]" data-node-id="I6126:20180;4045:19299" data-name="Cheklist / Disable / Light" />
                    <div className="absolute inset-[16.67%]" data-node-id="I6126:20180;4045:19300" data-name="check">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                    </div>
                  </div>
                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Medium'] font-medium leading-[1.5] line-through not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6126:20178">
                    Review client notes and call summary
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6126:20183" data-name="Checklist">
                  <div className="relative shrink-0 size-[20px]" data-node-id="6126:20184" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6126:20184;4045:19295" data-name="Checklist / Disable / Light" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-[256px]" data-node-id="6126:20185">
                    Confirm discount policy with finance
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6126:20188" data-name="Checklist">
                  <div className="relative shrink-0 size-[20px]" data-node-id="6126:20189" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6126:20189;4045:19295" data-name="Checklist / Disable / Light" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-[256px]" data-node-id="6126:20190">
                    Add dashboard visuals to proposal
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6126:20192" data-name="Checklist">
                  <div className="relative shrink-0 size-[20px]" data-node-id="6126:20193" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6126:20193;4045:19295" data-name="Checklist / Disable / Light" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-[256px]" data-node-id="6126:20194">
                    Export PDF version of revised proposal
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6126:20196" data-name="Checklist">
                  <div className="relative shrink-0 size-[20px]" data-node-id="6126:20197" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6126:20197;4045:19295" data-name="Checklist / Disable / Light" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-[191px]" data-node-id="6126:20198">
                    Email proposal to Michael Lee
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6126:20200" data-name="Checklist">
                  <div className="relative shrink-0 size-[20px]" data-node-id="6126:20201" data-name="Checklist">
                    <div className="absolute border border-[#bebec8] border-solid inset-0 rounded-[6px]" data-node-id="I6126:20201;4045:19295" data-name="Checklist / Disable / Light" />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-[256px]" data-node-id="6126:20202">
                    Log the activity in deal timeline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
