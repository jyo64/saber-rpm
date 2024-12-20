Name:           saber
Version:        0.25.3
Release:        1%{?dist}
Summary:        The notes app built for handwriting.
BuildArch:      x86_64
URL:            https://github.com/saber-notes/saber
License:        GPLv3
Source0:        %{name}-%{version}.tar.gz

Requires:       bash, zenity, gtk3-devel

%description
Saber is the notes app built for handwriting.

It's designed to be as simple and intuitive as possible, while still delivering unique features that you'll actually use. Additionally, Saber is available across all your devices, large and small, and syncs between them seamlessly.

Notably, it can invert your notes when you're in dark mode. This allows you to write with white ink on a black background, which is much easier on the eyes in low-light environments like when the teacher turns off the lights in class. Images and PDFs are also inverted, so you can still use a digital printout or a textbook without the fuss.

Saber uses a dual-password system to protect your notes from anyone but you, even if they have complete control over the server. You can safely store your notes on the official Saber server, another server, or even host your own!

The app is completely open-source so that anyone can view the source code and see exactly what it's doing and how it handles your data. Many other note-taking apps are closed-source and proprietary, meaning that their inner workings are a mystery to the public.

As someone who studies maths, highlighting multi-line equations was always a hassle with other apps, where the highlighter would change color when it overlapped with itself. Another problem I had was that in some apps, the highlighter would render on top of the text, fading it out and making it hard to read. Saber's highlighter has no such issues. It utilizes canvas compositing to render the highlighter in a way that is consistent with/better than traditional paper, where it handles overlaps and maintains color consistency.

Saber has everything you need to keep your notes organized. Create folders inside folders inside folders to your heart's content with no limit on the number of nested folders. And even though a note may be buried deep within a nested folder, you can still access it easily with your most recent notes always available on the home screen.

Discover a whole new way to capture and organize your thoughts with Saber. Whether you're a student, professional, or creative mind, Saber is your trusted companion for digital handwriting. Download now and let your ideas flow freely!

%global debug_package %{nil} 

%prep
%setup -q

%install
rm -rf $RPM_BUILD_ROOT
mkdir -p $RPM_BUILD_ROOT/%{_bindir}/%{name}
mkdir -p $RPM_BUILD_ROOT/usr/share/applications
cp %{name} $RPM_BUILD_ROOT/%{_bindir}/%{name}
cp -R lib $RPM_BUILD_ROOT/%{_bindir}/%{name}
cp -R data $RPM_BUILD_ROOT/%{_bindir}/%{name}

cp -R %{name}.desktop $RPM_BUILD_ROOT/usr/share/applications/%{name}.desktop


%clean
rm -rf $RPM_BUILD_ROOT

%files
%{_bindir}/%{name}
/usr/share/applications/

%changelog
* Sat Dec 14 2024 Jyothish Atheendran <athi.jyothish@gmail.com> - 0.25.3
- Bumped to v.0.25.3