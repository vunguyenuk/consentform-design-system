const assetPathPrefix = "https://www.figma.com/api/mcp/asset/a460ce90-11c7-4698-a043-d8d35900fe2f";
const imgProperty132Px = `${assetPathPrefix}/75dac.png`;
const imgProperty124Px = `${assetPathPrefix}/dd03b.png`;
const imgNotification = `${assetPathPrefix}/c6c0e.svg`;
const imgMessageText = `${assetPathPrefix}/7fdbf.svg`;
const imgTaskSquare = `${assetPathPrefix}/275c0.svg`;
const imgVuesaxLinearMessageQuestion = `${assetPathPrefix}/3df1b.svg`;
const imgSetting = `${assetPathPrefix}/7bba3.svg`;
const imgGroup1 = `${assetPathPrefix}/72053.svg`;
const imgUserOctagon = `${assetPathPrefix}/deb54.svg`;
const imgArrowDown = `${assetPathPrefix}/749f8.svg`;
const imgSidebarLeft = `${assetPathPrefix}/6ebdb.svg`;
const imgCategory2 = `${assetPathPrefix}/5b16d.svg`;
const imgNote = `${assetPathPrefix}/ab246.svg`;
const imgArrowDown1 = `${assetPathPrefix}/71b71.svg`;
const imgAdd = `${assetPathPrefix}/509d0.svg`;
const imgFolder2 = `${assetPathPrefix}/c4cc5.svg`;
const imgSearchNormal = `${assetPathPrefix}/11207.svg`;
const imgPlus = `${assetPathPrefix}/3dab3.svg`;
const imgStickynote = `${assetPathPrefix}/dddd7.svg`;
const imgMore = `${assetPathPrefix}/95bac.svg`;
const imgLine = `${assetPathPrefix}/0b1b1.svg`;
const imgVector914 = `${assetPathPrefix}/83ecf.svg`;
const imgClose = `${assetPathPrefix}/fc18d.svg`;
const imgLine1 = `${assetPathPrefix}/07a1a.svg`;

type AvatarMan1Props = {
  className?: string;
  property1?: "24px" | "32px";
};

function AvatarMan1({ className, property1 = "32px" }: AvatarMan1Props) {
  const is24Px = property1 === "24px";
  return (
    <div className={className || `relative ${is24Px ? "size-[24px]" : "size-[32px]"}`} id={is24Px ? "node-3_1844" : "node-3_1842"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height={is24Px ? "24" : "32"} src={is24Px ? imgProperty124Px : imgProperty132Px} width={is24Px ? "24" : "32"} />
    </div>
  );
}

type NavMenuProps = {
  className?: string;
  active?: boolean;
  darkmode?: "Off";
  menu?: "Help & Center" | "Settings" | "Notifications" | "Emails" | "Tasks";
};

function NavMenu({ className, active = false, darkmode = "Off", menu = "Notifications" }: NavMenuProps) {
  const isEmailsAndFalseAndOff = menu === "Emails" && !active && darkmode === "Off";
  const isHelpCenterAndFalseAndOff = menu === "Help & Center" && !active && darkmode === "Off";
  const isNotificationsAndFalseAndOff = menu === "Notifications" && !active && darkmode === "Off";
  const isSettingsAndFalseAndOff = menu === "Settings" && !active && darkmode === "Off";
  const isTasksAndFalseAndOff = menu === "Tasks" && !active && darkmode === "Off";
  return (
    <div className={className || "content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] w-[163px]"} id={isSettingsAndFalseAndOff ? "node-6155_21335" : isHelpCenterAndFalseAndOff ? "node-6155_21332" : isTasksAndFalseAndOff ? "node-6155_21329" : isEmailsAndFalseAndOff ? "node-6155_21323" : "node-6155_21320"}>
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

type LCreateNotePageProps = {
  className?: string;
  responsive?: "No";
};

function LCreateNotePage({ className, responsive = "No" }: LCreateNotePageProps) {
  return (
    <div className={className || "bg-[#f1f1f5] content-stretch flex h-[900px] items-start overflow-clip relative w-[1440px]"} data-node-id="6233:51540">
      <div className="bg-[#f9f9fb] border-[#f1f1f5] border-r border-solid content-stretch flex flex-col gap-[16px] h-full items-end overflow-clip p-[16px] relative shrink-0 w-[260px]" data-node-id="6073:33512" data-name="Navigation">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="I6073:33512;6155:47521" data-name="Logo">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative rounded-[6px] shrink-0" data-node-id="I6073:33512;6155:47522" data-name="Company">
            <Logo className="content-stretch flex gap-[7px] items-center relative shrink-0" />
            <div className="relative shrink-0 size-[14px]" data-node-id="I6073:33512;6155:47524" data-name="arrow-down">
              <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47524;3:11318" data-name="vuesax/linear/arrow-down">
                <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6073:33512;6155:47524;3:11319" data-name="arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-node-id="I6073:33512;6155:47525" data-name="sidebar-left">
            <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47525;3:34669" data-name="vuesax/linear/sidebar-left">
              <div className="absolute inset-[0_-20%_-20%_0]" data-node-id="I6073:33512;6155:47525;3:34670" data-name="sidebar-left">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#f1f1f5] border-solid content-stretch flex gap-[8px] items-center pl-[10px] pr-[12px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="I6073:33512;6155:47526" data-name="Profile">
          <AvatarMan1 className="relative shrink-0 size-[32px]" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative text-[12px] whitespace-nowrap" data-node-id="I6073:33512;6155:47528" data-name="Name">
            <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center overflow-hidden relative shrink-0 text-[#161618] text-ellipsis tracking-[-0.24px]" data-node-id="I6073:33512;6155:47529">
              <p className="leading-[normal] overflow-hidden text-ellipsis">John Cornor</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#5b5a64] text-ellipsis tracking-[-0.12px] w-[min-content]" data-node-id="I6073:33512;6155:47530">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Johncornor@mail.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[14px]" data-node-id="I6073:33512;6155:47531" data-name="arrow-down">
            <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47531;3:11318" data-name="vuesax/linear/arrow-down">
              <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6073:33512;6155:47531;3:11319" data-name="arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-node-id="I6073:33512;6155:47532" data-name="Menu">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I6073:33512;6155:47533" data-name="Main Menu">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6073:33512;6155:47534">
              <p className="leading-[normal]">Main Menu</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6073:33512;6155:47535" data-name="Main Menu">
              <div className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6073:33512;6155:48318" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6073:33512;6155:48318;4009:131742" data-name="category-2">
                  <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:48318;4009:131742;3:33781" data-name="vuesax/linear/category-2">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33512;6155:48318;4009:131742;3:33782" data-name="category-2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategory2} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33512;6155:48318;4009:131750">
                  <p className="leading-[1.5]">Dashboard</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Emails" />
              <div className="bg-[#e5e5ec] content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6073:33512;6155:48320" data-name="Nav Menu">
                <div className="relative shrink-0 size-[16px]" data-node-id="I6073:33512;6155:48320;4009:132162" data-name="note">
                  <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:48320;4009:132162;3:42197" data-name="vuesax/linear/note">
                    <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33512;6155:48320;4009:132162;3:42198" data-name="note">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNote} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#161618] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33512;6155:48320;4009:132163">
                  <p className="leading-[1.5]">Notes</p>
                </div>
              </div>
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Tasks" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-node-id="I6073:33512;6155:47541" data-name="Favorite">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-node-id="I6073:33512;6155:47542">
              <div className="relative shrink-0 size-[14px]" data-node-id="I6073:33512;6155:47543" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47543;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6073:33512;6155:47543;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown1} />
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#5b5a64] text-[12px] tracking-[-0.24px]" data-node-id="I6073:33512;6155:47544">
                <p className="leading-[normal]">Favorites</p>
              </div>
              <div className="relative shrink-0 size-[14px]" data-node-id="I6073:33512;6155:47545" data-name="add">
                <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47545;3:29466" data-name="vuesax/linear/add">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6073:33512;6155:47545;3:29467" data-name="add">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6073:33512;6155:47546">
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6073:33512;6155:47547" data-name="Favorite">
                <div className="bg-[#dba014] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6073:33512;6155:47548" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6073:33512;6155:47549" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47549;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6073:33512;6155:47549;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33512;6155:47550">
                  <p className="leading-[1.5]">Primor Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6073:33512;6155:47551" data-name="Favorite">
                <div className="bg-[#3863c6] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6073:33512;6155:47552" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6073:33512;6155:47553" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47553;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6073:33512;6155:47553;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33512;6155:47554">
                  <p className="leading-[1.5]">Sulivan Project</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" data-node-id="I6073:33512;6155:47555" data-name="Favorite">
                <div className="bg-[#392fd0] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[5px] shrink-0 size-[20px]" data-node-id="I6073:33512;6155:47556" data-name="btn">
                  <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] relative shrink-0 size-[12px]" data-node-id="I6073:33512;6155:47557" data-name="folder-2">
                    <div className="absolute contents inset-0" data-node-id="I6073:33512;6155:47557;3:13883" data-name="vuesax/bold/folder-2">
                      <div className="absolute inset-[0_-100%_-100%_0]" data-node-id="I6073:33512;6155:47557;3:13884" data-name="folder-2">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44444a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33512;6155:47558">
                  <p className="leading-[1.5]">Trustworth Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6073:33512;6155:47559" data-name="Other">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.24px] w-[74px]" data-node-id="I6073:33512;6155:47560">
              <p className="leading-[normal]">Other</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I6073:33512;6155:47561" data-name="Menu">
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Help & Center" />
              <NavMenu className="content-stretch flex gap-[12px] h-[33px] items-center px-[10px] py-[6px] relative rounded-[7px] shrink-0 w-full" menu="Settings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[1180px]" data-node-id="6073:33513" data-name="Main">
        <div className="bg-white border-[#f1f1f5] border-b border-solid content-stretch flex items-center justify-between overflow-clip px-[24px] py-[13px] relative shrink-0 w-full" data-node-id="6073:33514" data-name="Header">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020408] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6073:33515">
            <p className="leading-[1.5]">{`Notes `}</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6073:33516" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] py-[21px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 w-[184px]" data-node-id="6073:33517" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="6073:33518" data-name="search-normal">
                <div className="absolute contents inset-0" data-node-id="I6073:33518;3:21503" data-name="vuesax/linear/search-normal">
                  <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33518;3:21504" data-name="search-normal">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bebec8] text-[12px] text-center tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33519">
                Search Note
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[8px] shrink-0 w-[119px]" data-node-id="6073:33520" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <div className="relative shrink-0 size-[16px]" data-node-id="I6073:33520;6155:20976" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.24px] whitespace-nowrap" data-node-id="I6073:33520;6155:20977">
                Create Note
              </p>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1.8px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
        <div className="border-[#f1f1f5] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px p-[24px] relative w-full" data-node-id="6073:33521" data-name="Cards">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="6073:33522">
            Keep Every Detail Close 📝
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6073:33523">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6073:33524">
              Favorite Notes
            </p>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6073:33525" data-name="Headcount">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33526" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33527" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33528" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33528;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33528;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33529">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33529;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33529;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6073:33530" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33531">
                    Proposal Strategy – TechNova Inc.
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6073:33532">
                    “Send revised proposal by March 28 with optional add-ons. They’re very price-sensitive, but interested in long-term support contracts.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33533" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33534" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33536">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33537">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33538" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33539" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33540" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33540;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33540;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33541">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33541;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33541;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6073:33542" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33543">
                    Key Talking Points – BrightCorp
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6073:33544">
                    “Focus on security and compliance features. They’re in final review phase. John Carter has strong influence in decision-making.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33545">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector914} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33546" data-name="Received">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33548">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33549">
                    March 23, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33550" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33551" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33552" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33552;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33552;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33553">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33553;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33553;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6073:33554" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33555">
                    Objections Handling – Davis Tech
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6073:33556">
                    “Top concern is onboarding time. Prepare 2-week fast-track plan to ease their worries.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33557">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector914} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33558" data-name="Received">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33560">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33561">
                    March 22, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6073:33562">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6073:33563">
              List Notes
            </p>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6073:33564" data-name="Headcount">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33565" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33566" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33567" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33567;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33567;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33568">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33568;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33568;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6073:33569" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33570">
                    Discovery Call – GreenTech
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6073:33571">
                    “Alex emphasized the need for custom reporting. They’re evaluating three vendors but leaning toward us due to our integration capabilities. Key concern: timeline flexibility.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33572" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33573" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33575">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33576">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33577" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33578" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33579" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33579;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33579;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33580">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33580;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33580;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-node-id="6073:33581" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33582">
                    Onboarding Tasks – New Clients
                  </p>
                  <div className="font-['Inter:Medium'] font-medium h-[41px] leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="6073:33583">
                    <p className="leading-[1.5] mb-0">{`	•	Welcome email`}</p>
                    <p className="leading-[1.5]">{`	•	Kickoff meeting`}</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33584">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector914} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33585" data-name="Received">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33587">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33588">
                    March 23, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33589" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33590" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33591" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33591;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33591;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33592">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33592;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33592;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6073:33593" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33594">
                    Q2 Goals – Internal Sales Team
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6073:33595">
                    “Target: Increase close rate by 15%. Focus on upselling to existing clients. Weekly performance syncs to begin April 1.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33596">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector914} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33597" data-name="Received">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33599">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33600">
                    March 22, 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="6073:33601" data-name="Headcount">
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33602" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33603" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33604" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33604;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33604;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33605">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33605;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33605;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-node-id="6073:33606" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33607">
                    Follow-Up Checklist – Alex Spencer
                  </p>
                  <div className="font-['Inter:Medium'] font-medium h-[41px] leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="6073:33608">
                    <p className="leading-[1.5] mb-0">{`	•	Send case studies`}</p>
                    <p className="leading-[1.5]">{`	•	Schedule call for March 26`}</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33609" data-name="Line">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33610" data-name="User">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33612">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33613">
                    March 25, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33614" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33615" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33616" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33616;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33616;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33617">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33617;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33617;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-node-id="6073:33618" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33619">
                    Demo Feedback – Davis Tech
                  </p>
                  <p className="font-['Inter:Medium'] font-medium h-[41px] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6073:33620">
                    “Emily liked the automation flow but requested a lighter UI for their mobile reps. Suggested sending them mockups next week.”
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33621">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector914} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33622" data-name="Received">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33624">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33625">
                    March 23, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip p-[16px] relative rounded-[10px]" data-node-id="6073:33626" data-name="Total tasks">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6073:33627" data-name="Icons">
                  <div className="relative shrink-0 size-[26px]" data-node-id="6073:33628" data-name="stickynote">
                    <div className="absolute contents inset-0" data-node-id="I6073:33628;3:36839" data-name="vuesax/bold/stickynote">
                      <div className="absolute inset-[0_7.69%_7.69%_0]" data-node-id="I6073:33628;3:36840" data-name="stickynote">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStickynote} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="6073:33629">
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[16px]" data-name="more">
                        <div className="absolute contents inset-0" data-node-id="I6073:33629;3:34106" data-name="vuesax/linear/more">
                          <div className="absolute inset-[0_-50%_-50%_0]" data-node-id="I6073:33629;3:34107" data-name="more">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-node-id="6073:33630" data-name="Text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.5] relative shrink-0 text-[#252528] text-[16px] tracking-[-0.32px] w-full" data-node-id="6073:33631">{` Internal Content Requests`}</p>
                  <div className="font-['Inter:Medium'] font-medium h-[41px] leading-[0] overflow-hidden relative shrink-0 text-[#5b5a64] text-[14px] text-ellipsis tracking-[-0.28px] w-full whitespace-pre-wrap" data-node-id="6073:33632">
                    <p className="leading-[1.5] mb-0">{`	•	Create one-pager for “AI Features”`}</p>
                    <p className="leading-[1.5]">{`	•	Write FAQ on user roles`}</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-node-id="6073:33633">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector914} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-full" data-node-id="6073:33634" data-name="Received">
                  <AvatarMan1 className="relative shrink-0 size-[24px]" property1="24px" />
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#161618] text-[12px] tracking-[-0.24px]" data-node-id="6073:33636">
                    John Cornor
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b5a64] text-[12px] tracking-[-0.12px] whitespace-nowrap" data-node-id="6073:33637">
                    March 22, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col h-[900px] items-center justify-center left-0 overflow-clip p-[10px] top-0 w-[1440px]" data-node-id="6073:33932" data-name="Popup">
        <div className="bg-[#effcd3] content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-[804px]" data-node-id="6073:33933" data-name="Modal">
          <div className="border-[rgba(0,0,0,0.1)] border-b border-solid content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="6073:33934" data-name="Head">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-px not-italic relative text-[#252528] text-[18px] tracking-[-0.36px]" data-node-id="6073:33935">
              Create Note
            </p>
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0 size-[40px]" data-node-id="6232:47072" data-name="Button">
              <div className="relative shrink-0 size-[18px]" data-node-id="I6232:47072;6155:20944" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClose} />
              </div>
            </div>
          </div>
          <div className="bg-[#effcd3] content-stretch flex flex-col gap-[24px] items-start px-[80px] py-[48px] relative shrink-0 w-full" data-node-id="6142:18421" data-name="Main">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] min-w-full not-italic relative shrink-0 text-[#161618] text-[24px] tracking-[-0.72px] w-[min-content]" data-node-id="6142:18426">
              Proposal Strategy – TechNova Inc.
            </p>
            <div className="h-0 relative shrink-0 w-full" data-node-id="6142:18441" data-name="Line">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[18px] items-start not-italic relative shrink-0 text-[#020408] text-[14px] tracking-[-0.28px] w-full" data-node-id="6142:18494" data-name="Name">
              <div className="leading-[0] relative shrink-0 w-full whitespace-pre-wrap" data-node-id="6142:18495">
                <p className="leading-[1.5] mb-0">Summary:</p>
                <p className="leading-[1.5] mb-0">​</p>
                <p className="leading-[1.5]">We’re in the final stages of negotiation with TechNova for the CRM Enterprise Plan. They’ve requested a revised proposal that reflects the following</p>
              </div>
              <p className="leading-[1.5] relative shrink-0 w-full" data-node-id="6142:18496">
                ✅ Key Points to Include in Proposal:
              </p>
              <div className="leading-[0] relative shrink-0 w-full" data-node-id="6142:18497">
                <p className="leading-[1.5] mb-0">{`	Optional Add-Ons:`}</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">Data analytics module (+$250/mo)</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">SLA-based support (+$500/mo)</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[1.5]">API Access with extended limits</span>
                  </li>
                </ul>
              </div>
              <div className="leading-[0] relative shrink-0 w-full" data-node-id="6142:18498">
                <p className="leading-[1.5] mb-0">Discount Request:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">They’re asking for a 12-month commitment discount (~10–15%).</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[1.5]">Willing to sign if invoicing terms are flexible (quarterly instead of annual).</span>
                  </li>
                </ul>
              </div>
              <div className="leading-[0] relative shrink-0 w-full" data-node-id="6142:18499">
                <p className="leading-[1.5] mb-0">Customization Needs:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[1.5]">Require 3 custom dashboards for department-specific KPIs.</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[1.5]">Request for branding customization on client-facing reports.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[6px] items-center pl-[6px] pr-[12px] py-[6px] right-[16px] rounded-[20px] top-[16px]" data-node-id="6142:18544" data-name="Avatar">
              <div className="bg-[#effcd3] border border-[#bced7b] border-solid relative rounded-[100px] shrink-0 size-[24px]" data-node-id="6142:18545" />
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#161618] text-[12px] tracking-[-0.24px] whitespace-nowrap" data-node-id="6142:18546">
                Colors
              </p>
              <div className="relative shrink-0 size-[14px]" data-node-id="6142:18547" data-name="arrow-down">
                <div className="absolute contents inset-0" data-node-id="I6142:18547;3:11318" data-name="vuesax/linear/arrow-down">
                  <div className="absolute inset-[0_-71.43%_-71.43%_0]" data-node-id="I6142:18547;3:11319" data-name="arrow-down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[rgba(0,0,0,0.1)] border-solid border-t content-stretch flex gap-[12px] items-center justify-end p-[24px] relative shrink-0 w-full" data-node-id="6073:33983" data-name="Buttons">
            <div className="bg-white border border-[#e5e5ec] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] shrink-0" data-node-id="6073:33989" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#161618] text-[14px] text-center tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33989;6155:20945">
                Cancel
              </p>
            </div>
            <div className="border border-[#4d41f3] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[21px] relative rounded-[10px] shrink-0" data-node-id="6073:33990" data-name="Button">
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(77, 65, 243) 0%, rgb(77, 65, 243) 100%)" }} />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap" data-node-id="I6073:33990;6155:20937">
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
