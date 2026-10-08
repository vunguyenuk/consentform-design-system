const assetPathPrefix = "https://www.figma.com/api/mcp/asset/c2653769-fda2-48e1-b470-03e719533cfc";
const imgCategory2 = `${assetPathPrefix}/5b16d.svg`;
const imgNotification = `${assetPathPrefix}/c6c0e.svg`;
const imgMessageText = `${assetPathPrefix}/7fdbf.svg`;
const imgNote = `${assetPathPrefix}/3a1a9.svg`;
const imgTaskSquare = `${assetPathPrefix}/275c0.svg`;
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/749f8.svg`;
const imgSidebarLeft = `${assetPathPrefix}/6ebdb.svg`;
const imgArrowDown1 = `${assetPathPrefix}/71b71.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/74a69.svg`;
const imgSetting = `${assetPathPrefix}/7bba3.svg`;
const imgSearchNormal = `${assetPathPrefix}/8aadf.svg`;
const imgVuesaxLinearStar = `${assetPathPrefix}/21146.svg`;
const imgEdit = `${assetPathPrefix}/8c6d6.svg`;
const imgWalletMoney = `${assetPathPrefix}/d67d3.svg`;
const imgCategory3 = `${assetPathPrefix}/adc6a.svg`;
const imgMinus = `${assetPathPrefix}/6e602.svg`;
const imgAdd1 = `${assetPathPrefix}/1e99a.svg`;
const imgMessages2 = `${assetPathPrefix}/fc18d.svg`;

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

type LHelpCenterProps = {
  className?: string;
  responsive?: "No";
};

function LHelpCenter({ className, responsive = "No" }: LHelpCenterProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[1220px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:51880">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6188:43045" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6188:43045;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6188:43045;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6188:43045;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6188:43045;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6188:43045;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6188:43045;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6188:43045;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6188:43045;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6188:43045;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6188:43045;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6188:43045;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6188:43045;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6188:43045;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6188:43045;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6188:43045;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6188:43045;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6188:43045;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6188:43045;6155:48318;6155:21318" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:48318;6155:21318;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6188:43045;6155:48318;6155:21318;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:43045;6155:48318;6155:21319">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notifications" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Notes" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6188:43045;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6188:43045;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6188:43045;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6188:43045;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6188:43045;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6188:43045;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6188:43045;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6188:43045;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6188:43045;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6188:43045;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6188:43045;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6188:43045;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:43045;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6188:43045;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6188:43045;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6188:43045;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6188:43045;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:43045;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6188:43045;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6188:43045;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6188:43045;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6188:43045;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:43045;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6188:43045;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6188:43045;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6188:43045;6155:47561" data-name="Menu">
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6188:43045;6155:48381" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6188:43045;6155:48381;6155:21354" data-name="message-question">
                  <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:48381;6155:21354;3:27563" data-name="vuesax/linear/message-question">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearMessageQuestion} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:43045;6155:48381;6155:21355">
                  <p className="leading-[1.5]">{`Help & Center`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6188:43045;6155:48382" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6188:43045;6155:48382;4009:131838" data-name="setting">
                  <div className="absolute contents inset-0" data-node-id="I6188:43045;6155:48382;4009:131838;3:33830" data-name="vuesax/linear/setting">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6188:43045;6155:48382;4009:131838;3:33831" data-name="setting">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSetting} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:43045;6155:48382;4009:131839">
                  <p className="leading-[1.5]">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6188:43046" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex h-[58px] items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6188:43047" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6188:43048">
            <p className="leading-[1.5]">{`Help & Center`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px px-[80px] py-[40px] relative w-full" data-node-id="6188:43052" data-name="Main Help">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[1.5] not-italic relative shrink-0 whitespace-nowrap" data-node-id="6188:44444" data-name="Headline">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#161618] text-[36px] tracking-[-1.08px]" data-node-id="6188:44406">
              How can we help you succeed?
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px]" data-node-id="6188:44408">
              Find answers, get step-by-step guides, or contact our support team.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-[516px]" data-node-id="6188:44418" data-name="Field">
            <div className="border border-[#f1f1f5] border-solid content-stretch flex gap-[10px] h-[48px] items-center pl-[20px] pr-[16px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6188:44418;4006:183" data-name="Input Area">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bebec8] text-[14px] text-ellipsis tracking-[-0.28px] whitespace-nowrap" data-node-id="I6188:44418;4006:184">
                <p className="leading-[1.5] overflow-hidden text-ellipsis">Type your question or keyword…</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="I6188:44418;4006:185" data-name="eye-off">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6188:44493" data-name="Popular Help Topics">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold items-center justify-between leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46019" data-name="Head">
              <p className="relative shrink-0 text-[#161618] text-[16px] tracking-[-0.32px]" data-node-id="6188:44451">{` Popular Help Topics`}</p>
              <p className="relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px]" data-node-id="6193:46017">
                See more
              </p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6188:44447" data-name="Cards">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6188:44495" data-name="Topics Card">
                <div className="bg-[#ffe176] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6192:45264" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6192:45265" data-name="star">
                    <div className="absolute contents inset-0" data-node-id="I6192:45265;3:26867" data-name="vuesax/linear/star">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearStar} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6188:44561" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[18px] tracking-[-0.36px] w-full" data-node-id="6188:44540">
                    Getting Started
                  </p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6188:44539">
                    Set up your workspace, import contacts, and configure your first pipeline.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6192:44859">
                  Read Guide →
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6188:44542" data-name="Topics Card">
                <div className="bg-[#958cfb] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6192:45269" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6192:45270" data-name="edit">
                    <div className="absolute contents inset-0" data-node-id="I6192:45270;3:37131" data-name="vuesax/linear/edit">
                      <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45270;3:37132" data-name="edit">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEdit} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6188:44578" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[18px] tracking-[-0.36px] w-full" data-node-id="6188:44543">
                    Customize CRM
                  </p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6188:44544">
                    Learn how to edit fields, create custom views, and manage pipelines.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6192:44865">
                  Customize Setup →
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6188:44545" data-name="Topics Card">
                <div className="bg-[#bced7b] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6192:45274" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6192:45275" data-name="wallet-money">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletMoney} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6188:44598" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[18px] tracking-[-0.36px] w-full" data-node-id="6188:44546">{`Billing & Subscription`}</p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6188:44547">
                    Manage your plan, update payment methods, or view invoices.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6192:44866">
                  Go to Billing Help →
                </p>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6188:44548" data-name="Topics Card">
                <div className="bg-[#94bdf7] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0 size-[38px]" data-node-id="6192:45279" data-name="Icon">
                  <div className="relative shrink-0 size-[18px]" data-node-id="6192:45280" data-name="category-2">
                    <div className="absolute contents inset-0" data-node-id="I6192:45280;3:33781" data-name="vuesax/linear/category-2">
                      <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45280;3:33782" data-name="category-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory3} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6188:44617" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[18px] tracking-[-0.36px] w-full" data-node-id="6188:44549">
                    Integrations
                  </p>
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6188:44550">
                    Connect with Google Calendar, Slack, Zoom, and more.
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px] w-[min-content]" data-node-id="6192:44861">
                  View Integrations →
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6192:44788" data-name="Help & Center">
            <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold'] font-semibold items-center justify-between leading-[1.5] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6193:46022" data-name="Head">
              <p className="relative shrink-0 text-[#161618] text-[16px] tracking-[-0.32px]" data-node-id="6192:44789">
                Frequently Asked Question
              </p>
              <p className="relative shrink-0 text-[#4d81e7] text-[14px] tracking-[-0.28px]" data-node-id="6193:46020">
                See more
              </p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6192:44790" data-name="FAQs">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[502px]" data-node-id="6192:45331" data-name="FAQs">
                <div className="bg-white border border-[#44444a] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:44791" data-name="FAQ">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6192:44840">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:44831">
                      How do I set up my CRM workspace?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:44833" data-name="minus">
                      <div className="absolute contents inset-0" data-node-id="I6192:44833;3:29504" data-name="vuesax/linear/minus">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:44833;3:29505" data-name="minus">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[1.5] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6192:44830">
                    After signing up, you’ll be guided through a quick setup wizard to create pipelines, import contacts, and invite team members.
                  </p>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:45332" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:45333">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:45334">
                      How do I change my plan or upgrade?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:45335" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:45335;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45335;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:45342" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:45343">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:45344">
                      Where can I download my invoices?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:45345" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:45345;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45345;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:45360" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:45361">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:45362">
                      How do I set up an automation?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:45363" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:45363;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45363;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-node-id="6192:45321" data-name="FAQs">
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:44801" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:44846">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:44847">
                      Can I get a refund if I cancel early?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:44848" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:44848;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:44848;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:45312" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:45313">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:45314">
                      Can I import data from another CRM?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:45315" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:45315;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45315;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:45322" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:45323">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:45324">
                      Is there a mobile version of the CRM?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:45325" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:45325;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45325;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 w-full" data-node-id="6192:45351" data-name="FAQ">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="6192:45352">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6192:45353">
                      What happens if I delete a contact or deal?
                    </p>
                    <div className="relative shrink-0 size-[18px]" data-node-id="6192:45354" data-name="add">
                      <div className="absolute contents inset-0" data-node-id="I6192:45354;3:29466" data-name="vuesax/linear/add">
                        <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-node-id="I6192:45354;3:29467" data-name="add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6188:44637" data-name="Contact Support">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6188:44638">
              Contact Support
            </p>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6188:44639" data-name="Cards">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6188:44640" data-name="All Card">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic relative" data-node-id="6188:44642">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6188:44644">
                    Live Chat
                  </p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6188:44643">
                    Mon–Fri, 9:00 AM – 6:00 PM
                  </p>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[38px]" data-node-id="6188:44641" data-name="Button">
                  <div className="relative shrink-0 size-[18px]" data-node-id="I6188:44641;6155:20964" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessages2} />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6192:44700" data-name="All Card">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic relative" data-node-id="6192:44702">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6192:44703">
                    Email Address
                  </p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6192:44704">
                    support@yourcrm.com
                  </p>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[38px]" data-node-id="6192:44701" data-name="Button">
                  <div className="relative shrink-0 size-[18px]" data-node-id="I6192:44701;6155:20964" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessages2} />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px overflow-clip p-[24px] relative rounded-[10px]" data-node-id="6192:44716" data-name="All Card">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px not-italic relative" data-node-id="6192:44718">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] w-full" data-node-id="6192:44719">
                    Phone Number
                  </p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6192:44720">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[38px]" data-node-id="6192:44717" data-name="Button">
                  <div className="relative shrink-0 size-[18px]" data-node-id="I6192:44717;6155:20964" data-name="plus">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessages2} />
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
