const assetPathPrefix = "https://www.figma.com/api/mcp/asset/324eb03f-bb04-4780-b49d-4dba33c2fdaf";
const imgCategory2 = `${assetPathPrefix}/5b16d.svg`;
const imgNotification = `${assetPathPrefix}/c6c0e.svg`;
const imgMessageText = `${assetPathPrefix}/7fdbf.svg`;
const imgNote = `${assetPathPrefix}/3a1a9.svg`;
const imgTaskSquare = `${assetPathPrefix}/275c0.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgImage = `${assetPathPrefix}/ea216.png`;
const imgArrowDown = `${assetPathPrefix}/749f8.svg`;
const imgSidebarLeft = `${assetPathPrefix}/6ebdb.svg`;
const imgArrowDown1 = `${assetPathPrefix}/71b71.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/74a69.svg`;
const imgSetting = `${assetPathPrefix}/7bba3.svg`;
const imgArrowLeft = `${assetPathPrefix}/17114.svg`;

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "Off";
  menu?: "Dashboard" | "Notifications" | "Emails" | "Notes" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "Off", menu = "Dashboard" }: NavMenuProps) {
  const isDashboardAndFalseAndOff = menu === "Dashboard" && !active && darkmode === "Off";
  const isEmailsAndFalseAndOff = menu === "Emails" && !active && darkmode === "Off";
  const isNotesAndFalseAndOff = menu === "Notes" && !active && darkmode === "Off";
  const isNotificationsAndFalseAndOff = menu === "Notifications" && !active && darkmode === "Off";
  const isTasksAndFalseAndOff = menu === "Tasks" && !active && darkmode === "Off";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isTasksAndFalseAndOff ? "node-6155_21329" : isNotesAndFalseAndOff ? "node-6155_21326" : isEmailsAndFalseAndOff ? "node-6155_21323" : isNotificationsAndFalseAndOff ? "node-6155_21320" : "node-6155_21317"}>
      {isDashboardAndFalseAndOff && (
        <>
          <div className="relative shrink-0 size-[16px]" data-node-id="6155:21318" data-name="category-2">
            <div className="absolute contents inset-0" data-node-id="I6155:21318;3:33781" data-name="vuesax/linear/category-2">
              <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6155:21318;3:33782" data-name="category-2">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6155:21319">
            <p className="leading-[1.5]">Dashboard</p>
          </div>
        </>
      )}
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

type LHelpCenterDetailsTopicsProps = {
  className?: string;
  responsive?: "No";
};

function LHelpCenterDetailsTopics({ className, responsive = "No" }: LHelpCenterDetailsTopicsProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[1220px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:51894">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6193:46032" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6193:46032;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6193:46032;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46032;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46032;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6193:46032;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:46032;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6193:46032;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6193:46032;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6193:46032;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6193:46032;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46032;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46032;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6193:46032;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6193:46032;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6193:46032;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46032;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46032;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46032;6155:48318;6155:21318" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:48318;6155:21318;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:46032;6155:48318;6155:21318;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46032;6155:48318;6155:21319">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6193:46032;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6193:46032;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46032;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46032;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6193:46032;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6193:46032;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6193:46032;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46032;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46032;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:46032;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:46032;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:46032;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46032;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46032;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:46032;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:46032;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:46032;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46032;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46032;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6193:46032;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6193:46032;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6193:46032;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46032;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46032;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6193:46032;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6193:46032;6155:47561" data-name="Menu">
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46032;6155:48381" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46032;6155:48381;6155:21354" data-name="message-question">
                  <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:48381;6155:21354;3:27563" data-name="vuesax/linear/message-question">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46032;6155:48381;6155:21355">
                  <p className="leading-[1.5]">{`Help & Center`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6193:46032;6155:48382" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6193:46032;6155:48382;4009:131838" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6193:46032;6155:48382;4009:131838;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6193:46032;6155:48382;4009:131838;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6193:46032;6155:48382;4009:131839">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6193:46033" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex gap-[8px] h-[58px] items-center overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6193:46034" data-name="Header">
          <div className="relative shrink-0 size-[20px]" data-node-id="6193:46384" data-name="arrow-left">
            <div className="absolute contents inset-0" data-node-id="I6193:46384;3:11458" data-name="vuesax/linear/arrow-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6193:46384;3:11459" data-name="arrow-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46035">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46396">
            <p className="leading-[1.5]">/</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46382">
            <p className="leading-[1.5]">Topics</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46397">
            <p className="leading-[1.5]">/</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6193:46383">
            <p className="leading-[1.5]">Customize CRM</p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[80px] items-start min-h-px px-[80px] py-[40px] relative w-full" data-node-id="6193:46036" data-name="Main Help">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-node-id="6193:46037" data-name="Main Content">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46404" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] text-[32px] tracking-[-0.96px]" data-node-id="6193:46038">
                Customize CRM
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46039">
                From custom fields to personalized pipelines, make your CRM work the way you do
              </p>
            </div>
            <div className="h-[277px] relative rounded-[10px] shrink-0 w-full" data-node-id="6193:46403" data-name="image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46405" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px]" data-node-id="6193:46406">
                1. Create Custom Fields
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46407">
                Track exactly what matters by adding fields tailored to your leads, deals, or contacts.
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46408">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Add text, dropdowns, dates, checkboxes, or tags</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Use custom fields in filters, automations, and reports</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">Example: “Lead Source,” “Product Interest,” “Account Tier”</span>
                </li>
              </ul>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46409">{`📌 Go to: Settings > Custom Fields`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46410" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px]" data-node-id="6193:46411">
                2. Build Your Sales Pipelines
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46412">
                Design unique workflows for sales, support, or onboarding teams.
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46413">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Add or rename pipeline stages (e.g., “Qualified → Demo → Proposal”)</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Set stage goals and probabilities</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">Assign pipelines to specific teams or users</span>
                </li>
              </ul>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46414">{`📌 Go to: Pipelines > Manage Pipelines`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46416" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px]" data-node-id="6193:46417">{`3. Personalize Views & Layouts`}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46418">
                Make your dashboard easier to scan and more actionable.
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46419">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Add or rename pipeline stages (e.g., “Qualified → Demo → Proposal”)</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[1.5]">Set stage goals and probabilities</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[1.5]">Assign pipelines to specific teams or users</span>
                </li>
              </ul>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46420">{`📌 Go to: Pipelines > Manage Pipelines`}</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46426" data-name="Text">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px]" data-node-id="6193:46427">
                4. Automate Repetitive Work
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6193:46428">
                Trigger actions automatically based on lead behavior or pipeline stage.
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[14px] tracking-[-0.28px] w-[225px]" data-node-id="6193:46400" data-name="Link">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#161618] whitespace-nowrap" data-node-id="6193:46401">
              On This Page
            </p>
            <ol className="block font-['Inter:Semi_Bold'] font-semibold leading-[0] list-decimal min-w-full relative shrink-0 text-[#111113] w-[min-content]" data-node-id="6193:46402" start="1">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Create Custom Fields</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal relative shrink-0 text-[#5b5a64] whitespace-nowrap" data-node-id="6193:46432" start="2">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Build Your Sales Pipelines</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[#5b5a64] w-[min-content]" data-node-id="6193:46433" start="3">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">{`Personalize Views & Layouts`}</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[#5b5a64] w-[min-content]" data-node-id="6193:46434" start="4">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Automate Repetitive Work</span>
              </li>
            </ol>
            <ol className="block font-['Inter:Regular'] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[#5b5a64] w-[min-content]" data-node-id="6193:46435" start="5">
              <li className="ms-[21px]">
                <span className="leading-[1.5]">Integrate with Your Favorite Tools</span>
              </li>
            </ol>
            <p className="font-['Inter:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#5b5a64] w-[min-content]" data-node-id="6193:46436">
              📣 Need Help Customizing?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
